import {
  BaseEntity,
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
  Cascade,
  OneToOne,
} from '@mikro-orm/core';
import { Event } from './event.entity';
import { Schedule } from './schedule.class';

@Entity()
export class EventRecurrence extends BaseEntity<EventRecurrence, 'id'> {
  constructor(
    rrule: string,
    parentEvent: Event,
    start: Date,
    end?: Date,
    original?: EventRecurrence,
  ) {
    super();
    this.rrule = rrule;
    this.parentEvent = parentEvent;
    this.dtstart = start;
    this.dtend = end;
    this.original = original;
  }

  @PrimaryKey()
  id!: number;

  @Property({ unique: true })
  rrule!: string;

  @Property()
  dtstart!: Date;

  @Property({ nullable: true })
  dtend?: Date;

  /**
   * Relationships
   */

  @OneToMany(() => Event, (event) => event.recurrence, {
    hidden: true,
    cascade: [Cascade.ALL],
  })
  events: Collection<Event> = new Collection<Event>(this);

  @OneToOne(() => Event)
  parentEvent!: Event;

  @ManyToOne(() => EventRecurrence, { nullable: true })
  original?: EventRecurrence;

  /**
   * Methods
   */

  /**
   * Returns a schedule class from the rrule stored in this entity.
   */
  public getSchedule() {
    return new Schedule(this.rrule);
  }
}
