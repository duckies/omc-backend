import {
  BaseEntity,
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BadRequestException } from '@nestjs/common';
import moment from 'moment';
import { getMinutesDiff } from '../app.utils';
import { Course } from '../course/course.entity';
import { EventRegistration } from '../event-registration/event-registration.entity';
import { Invoice } from '../invoice/invoice.entity';
import { Project } from '../project/project.entity';
import { User } from '../user/user.entity';
import { EventPermissionsDto } from './dtos/event-permissions.dto';
import { EventRecurrence } from './event-recurrence.entity';

@Entity()
export class Event extends BaseEntity<Event, 'id'> {
  @PrimaryKey()
  id!: number;

  @Property()
  name!: string;

  @Property({ nullable: true })
  description?: string;

  @Property()
  isOnline!: boolean;

  @Property({ nullable: true })
  location?: string;

  @Property({ nullable: true })
  picture?: string;

  @Property({ nullable: true })
  color?: string;

  @Property({ nullable: true })
  permissions?: EventPermissionsDto;

  @Property({ nullable: true })
  fee?: string;

  @Property({ onUpdate: () => new Date(), hidden: true })
  updatedAt: Date = new Date();

  @Property({ hidden: true })
  createdAt: Date = new Date();

  /**
   * Timing Data
   */

  @Property()
  dtstart!: Date;

  @Property({ nullable: true })
  dtend?: Date;

  @Property({ nullable: true })
  originalStart?: Date;

  /**
   * Relationships
   */

  @ManyToOne(() => EventRecurrence, { nullable: true, hidden: true })
  recurrence?: EventRecurrence;

  @OneToMany(() => Invoice, (i) => i.event)
  invoices = new Collection<Invoice>(this);

  @OneToMany(() => EventRegistration, (r) => r.event)
  registrations = new Collection<EventRegistration>(this);

  @ManyToOne(() => Course, { nullable: true, eager: true })
  course?: Course;

  @ManyToOne(() => Project, { nullable: true, eager: true })
  project?: Project;

  @ManyToOne(() => User)
  author!: User;

  /**
   * Getters
   */

  get isStarted() {
    return new Date() > this.dtstart;
  }

  get isEnded() {
    return moment(new Date()).isAfter(
      this.dtend ? this.dtend : moment(this.dtstart).add('1', 'day'),
    );
  }

  /**
   * Methods
   */

  /**
   * Returns the most accurate starting time for an event.
   * This is used when exceptions are inside the event loop.
   */
  public start() {
    return this.originalStart || this.dtstart;
  }

  /**
   * Sets a new end date on an event, if possible.
   * If necessary, this will remove an exception start time.
   *
   * @param dtend New ending date.
   */
  public setEndDate(dtend: Date) {
    // The starting date is after the ending date, disgusting!
    if (dtend < this.dtstart) {
      // Reset an exception to apply this dtend, if possible.
      if (this.originalStart && this.originalStart < dtend) {
        this.dtstart = this.originalStart;
        this.originalStart = null;
      } else {
        throw new BadRequestException('dtstart after dtend');
      }
    }

    this.dtend = dtend;
  }

  /**
   * Returns the duration of an event in minutes.
   */
  public getDuration() {
    return getMinutesDiff(this.dtstart, this.dtend);
  }

  /**
   * Checks if a user fits the permissions of an event.
   *
   * @param user User
   */
  public hasPermission(user: User) {
    // TODO: Add default permissions, e.g. adults not being able to register.

    if (this.permissions) {
      const { age } = this.permissions;

      if (user.age > age.max || user.age < age.min) {
        return false;
      }

      // TODO: Add grade
    }

    return true;
  }
}