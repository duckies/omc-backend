import { defineStore } from 'pinia'
import { FindAllEventsDto } from '@server/event/dto/find-all-events.dto'
import { DTOEvent } from '@/store/events'
import { CreateEventDto } from '@server/event/dto/create-event.dto'
import { UpdateEventsDto } from '@server/event/dto/update-events.dto'
import { UpdateEventDto } from '@server/event/dto/update-event.dto'
import { DTO } from '@/types/date-to-string.interface'
import { toLocalISO } from '../utils/utilities'

export const useEvents = defineStore({
  id: 'events',
  state: () => ({
    event: null as DTOEvent | null,
    events: [] as DTOEvent[],
    defaultPicture: require('~/assets/images/programmer.jpg'),
  }),
  getters: {
    calendarEvents: (state) =>
      state.events.map((e) => ({
        ...e,
        start: toLocalISO(e.dtstart),
        end: e.dtend ? toLocalISO(e.dtend) : undefined,
      })),
    dates(): string[] {
      return this.calendarEvents.map((e) => e.start.substr(0, 10))
    },
  },
  actions: {
    async create(createEventDto: CreateEventDto) {
      await this.$nuxt.$axios.$post('/event', createEventDto)
    },
    async findOne(id: number) {
      this.event = await this.$nuxt.$axios.$get('/event/' + id)
    },
    async findAll(findAllEventsDto?: FindAllEventsDto) {
      this.events = await this.$nuxt.$axios.$get('/event', {
        params: findAllEventsDto,
      })
    },
    async update(
      id: number,
      data: DTO<UpdateEventDto> | DTO<UpdateEventsDto>,
      mode: 'single' | 'future' | 'all'
    ) {
      await this.$nuxt.$axios.$patch(`/event/${id}/${mode}`, data)
    },
    async delete(id: number, mode: 'single' | 'future' | 'all') {
      await this.$nuxt.$axios.$delete(`/event/${id}/${mode}`)
    },
  },
})
