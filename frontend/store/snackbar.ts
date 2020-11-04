import { actionTree, mutationTree } from 'nuxt-typed-vuex'

interface SnackbarPayload {
  text: string
  color?: string
  timeout?: number
}

export const state = () => ({
  text: '',
  color: null as string | null,
  timeout: null as number | null,
})

export const mutations = mutationTree(state, {
  setSnack(state, snack: SnackbarPayload) {
    state.text = snack.text
    state.color = snack.color || null
    state.timeout = snack.timeout || null
  },
})

export const actions = actionTree(
  { state, mutations },
  {
    show({ commit }, payload: SnackbarPayload) {
      commit('setSnack', payload)
    },
  }
)