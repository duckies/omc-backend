import { defineStore } from 'pinia'
import { CreateUserDto } from '@server/user/dtos/create-user.dto'
import { FindUsersDto } from '@server/user/dtos/find-users.dto'
import { UpdateOwnUserDto } from '@server/user/dtos/update-own-user.dto'
import { UpdateUserDto } from '@server/user/dtos/update-user.dto'
import { DTO } from '@/types/date-to-string.interface'
import { User } from '@server/user/user.entity'
import { StateStatus, StateError } from '@/types/state.interface'

export type DTOUser = DTO<User>

export const useUsers = defineStore({
  id: 'user',
  state: () => ({
    status: 'Idle' as StateStatus,
    error: null as StateError | null,
    user: null as DTOUser | null,
    users: [] as DTOUser[],
  }),
  getters: {
    isLoading: (state) => state.status === 'Loading',
  },
  actions: {
    async create(createUserDto: CreateUserDto) {
      this.user = await this.$nuxt.$axios.$post('/user', createUserDto)
    },
    async findOne(id: number | string) {
      this.user = await this.$nuxt.$axios.$get('/user/' + id)
    },
    async findAll(findUsersDto?: FindUsersDto) {
      const resp = await this.$nuxt.$axios.$get('/user', {
        params: findUsersDto,
      })

      this.users = resp[0]
    },
    async update(
      id: number,
      updateUserDto: UpdateUserDto | UpdateOwnUserDto,
      own = false
    ) {
      await this.$nuxt.$axios.$patch(
        '/user/' + (own ? 'own/' : '') + id,
        updateUserDto
      )
    },
    async delete(id: number) {
      await this.$nuxt.$axios.$delete('/user/' + id)
    },
  },
})
