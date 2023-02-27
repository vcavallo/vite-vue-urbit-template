import { GetterTree } from 'vuex'
import { GetterTypes } from './getter-types'
import { State } from './state'

import * as T from '@/types'
import * as L from '@/types/loading-types'

export type Getters = {
  [GetterTypes.EXAMPLE_WITH_ARG](state: State): (arg: string) => string | null

  [GetterTypes.ELEMENT_INITIAL](state: State): (uie: L.UIElement) => boolean
  [GetterTypes.ELEMENT_LOADING](state: State): (uie: L.UIElement) => boolean
  [GetterTypes.ELEMENT_SUCCESS](state: State): (uie: L.UIElement) => boolean
  [GetterTypes.ELEMENT_ERROR]  (state: State): (uie: L.UIElement) => boolean
  [GetterTypes.ELEMENT_STATUS_MAP]  (state: State, getters: Getters): (uie: L.UIElement) => L.StatusMap

  // Add more here.
}

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.EXAMPLE_WITH_ARG]: (state) => (arg: string) => {
    // look something up in state
    return 'found it'
  },

  [GetterTypes.ELEMENT_INITIAL]: (state) => (uie: L.UIElement): boolean => {
    return state.loadingStates[uie] === L.loaderStates.initial
  },
  [GetterTypes.ELEMENT_LOADING]: (state) => (uie: L.UIElement): boolean => {
    return state.loadingStates[uie] === L.loaderStates.loading
  },
  [GetterTypes.ELEMENT_SUCCESS]: (state) => (uie: L.UIElement): boolean => {
    return state.loadingStates[uie] === L.loaderStates.success
  },
  [GetterTypes.ELEMENT_ERROR]: (state) => (uie: L.UIElement): boolean => {
    return state.loadingStates[uie] === L.loaderStates.error
  },
  [GetterTypes.ELEMENT_STATUS_MAP]: (state, getters) => (uie: L.UIElement): L.StatusMap => {
    return {
      initial: getters.ELEMENT_INITIAL(uie),
      loading: getters.ELEMENT_LOADING(uie),
      success: getters.ELEMENT_SUCCESS(uie),
      error: getters.ELEMENT_ERROR(uie),
    }
  },

  // Add more here
}
