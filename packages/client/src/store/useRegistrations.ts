import { defineStore } from 'pinia'
import { CreateRegistrationDto } from '@server/event-registration/dtos/create-registration.dto'
import { CreateVolunteerRegistrationDto } from '@server/event-registration/dtos/create-volunteer-registration.dto'
import { EventRegistrationStatus } from '@server/event-registration/dtos/event-registration-status.dto'
import { EventRegistration } from '@server/event-registration/event-registration.entity'
import { StateStatus, StateError } from '@/types/state.interface'

export const useRegistrations = defineStore({
  id: 'registrations',
  state: () => ({
    status: 'Idle' as StateStatus,
    error: null as StateError | null,
    registration: null as EventRegistration | null,
    registrations: [] as EventRegistration[],
    statuses: [] as EventRegistrationStatus[],
  }),
  getters: {
    isLoading: (state) => state.status === 'Loading',
  },
  actions: {
    async create(
      data: CreateRegistrationDto | CreateVolunteerRegistrationDto,
      volunteering = false
    ) {
      this.registration = await this.$nuxt.$axios.$post(
        '/registration' + (volunteering ? '/volunteer' : ''),
        data
      )
    },
    async findOne(id: number) {
      this.registration = await this.$nuxt.$axios.$get('/registration/' + id)
    },
    async findAll() {
      this.registrations = await this.$nuxt.$axios.$get('/registration')
    },
    async findStatuses(eventId: number) {
      this.statuses = await this.$nuxt.$axios.$get(
        '/registration/status/' + eventId
      )
    },
    async delete(id: number) {
      await this.$nuxt.$axios.$delete('/registration/' + id)
    },
  },
})