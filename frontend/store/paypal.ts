import { actionTree, mutationTree } from 'nuxt-typed-vuex'
import { Invoice } from '../../backend/src/invoice/invoice.entity'
import { StateError } from '../interfaces/state-error.interface'
import { StateStatus } from '../interfaces/state.interface'
import { parseAxiosError } from '../utils/utilities'

export const state = () => ({
  status: StateStatus.UNLOADED,
  error: null as StateError | null,
})

export const mutations = mutationTree(state, {
  setStatus(state, status: StateStatus) {
    state.status = status

    if (status === StateStatus.BUSY) {
      state.error = null
    }
  },
  setError(state, error: any) {
    state.status = StateStatus.ERROR
    state.error = parseAxiosError(error)
  },
})

export const actions = actionTree(
  { state },
  {
    create(
      _actionTree,
      { eventId, users }: { eventId: number; users: number[] }
    ) {
      return this.$axios.$post(`/registration/order/create/${eventId}`, {
        users,
      })
    },
    capture(
      _actionTree,
      { eventId, orderId }: { eventId: number; orderId: number }
    ) {
      return this.$axios.$post<Invoice[]>(
        `/registration/order/capture/${eventId}/${orderId}`
      )
    },
  }
)
