import { actionTree, getterTree, mutationTree } from 'nuxt-typed-vuex'
import { Account } from '../../backend/src/account/account.entity'
import { CreateAccountDto } from '../../backend/src/account/dtos/create-account.dto'
import { Roles } from '../../backend/src/app.roles'
import { User } from '../../backend/src/user/user.entity'
import { State } from '../interfaces/state.interface'
import { COOKIE_COMPLETE, COOKIE_JWT } from '../utils/constants'

interface LoginDto {
  email: string
  password: string
  remember: boolean
}

export const state = () => ({
  status: State.UNLOADED,
  error: null as Error | null,
  user: null as User | null,
  account: null as Account | null,
  settings: {
    calendarType: 'month',
  },
  token: null as string | null,
  complete: false,
  remember: true,
  justRegistered: false,
})

type AuthState = ReturnType<typeof state>

export const getters = getterTree(state, {
  loggedIn: (state) => !!state.token,
  accountUsers: (state) => (state.account?.users as unknown) as User[],
  isAdmin: (state) => state.user?.roles?.includes(Roles.ADMIN),
  isValidated: (state) => state.user?.emailVerified,
  avatar: (state) =>
    state.user?.avatar || '../images/default_avatars/default.svg',
})

export const mutations = mutationTree(state, {
  setStatus(state, status: State) {
    state.status = status
  },
  setError(state, error: Error) {
    state.error = error
  },
  setToken(state, token: string | null) {
    state.token = token
  },
  setComplete(state, complete: boolean) {
    state.complete = complete
  },
  setUser(state, user: User) {
    state.user = user
  },
  setAccount(state, account: Account) {
    state.account = account
  },
  setSettings(state, settings: Partial<AuthState['settings']>) {
    state.settings = Object.assign({}, state.settings, settings)
  },
  setRemember(state, remember: boolean) {
    state.remember = remember
  },
  setJustRegistered(state, value: boolean) {
    state.justRegistered = value
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    setCookie(
      { state },
      { name, value }: { name: string; value: string | null }
    ): void {
      if (value === null) {
        this.app.$cookies.remove(name)
        return
      }

      this.app.$cookies.set(name, value, {
        maxAge: state.remember ? 365 * 24 * 60 * 60 * 1000 : undefined,
      })
    },
    async login({ commit }, loginDto: LoginDto): Promise<void> {
      commit('setStatus', State.BUSY)

      const { token, complete } = await this.$axios.$post('/login', {
        email: loginDto.email,
        password: loginDto.password,
      })

      commit('setRemember', loginDto.remember)
      commit('setToken', token)
      commit('setComplete', complete)
      this.app.$accessor.auth.setCookie({ name: COOKIE_JWT, value: token })
      this.app.$accessor.auth.setCookie({
        name: COOKIE_COMPLETE,
        value: complete,
      })

      commit('setStatus', State.WAITING)
    },
    async logout({ commit }, everywhere?: boolean): Promise<void> {
      commit('setStatus', State.BUSY)

      if (everywhere) {
        await this.$axios.$post('/logout')
      }

      commit('setToken', null)
      this.app.$accessor.auth.setCookie({ name: COOKIE_JWT, value: null })
      this.app.$accessor.auth.setCookie({ name: COOKIE_COMPLETE, value: null })

      commit('setStatus', State.WAITING)
    },
    async switchUser({ commit }, userId: number): Promise<void> {
      commit('setStatus', State.BUSY)

      const { token, complete } = await this.$axios.$post(`/switch/${userId}`)

      commit('setToken', token)
      commit('setComplete', complete)
      this.app.$accessor.auth.setCookie({ name: COOKIE_JWT, value: token })
      this.app.$accessor.auth.setCookie({
        name: COOKIE_COMPLETE,
        value: complete,
      })

      commit('setStatus', State.WAITING)
    },
    async register(
      { commit },
      createAccountDto: CreateAccountDto
    ): Promise<void> {
      try {
        commit('setStatus', State.BUSY)

        const { token, complete } = await this.$axios.$post(
          '/account/register',
          createAccountDto
        )

        commit('setToken', token)
        commit('setComplete', complete)
        this.app.$accessor.auth.setCookie({ name: COOKIE_JWT, value: null })
        this.app.$accessor.auth.setCookie({
          name: COOKIE_COMPLETE,
          value: complete,
        })

        commit('setJustRegistered', true)
        commit('setStatus', State.WAITING)
      } catch (error) {
        commit('setStatus', State.ERROR)
        commit('setError', error)
      }
    },
    async getMe({ commit }): Promise<void> {
      commit('setStatus', State.BUSY)

      const user = await this.$axios.$get('/user/me')

      commit('setUser', user)
      commit('setStatus', State.WAITING)
    },
    async getAccount({ commit }): Promise<void> {
      commit('setStatus', State.BUSY)

      const account = await this.$axios.$get('/account/me')

      commit('setAccount', account)
      commit('setStatus', State.WAITING)
    },
  }
)