import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./state";
import * as T from "@/types";
import * as L from "@/loading-types";
import { sigShip } from "@/helpers"
import * as MR from "@/api/types/my-response";

export type Mutations<S = State> = {
  [MutationTypes.EXAMPLE](
    state: S,
    payload: T.ExampleResponseOne
  ): void;

  [MutationTypes.LOADING_STATE_SET](
    state: S,
    payload: { uiElement: L.UIElement, currentState: L.LoaderState }
  ): void;

  // Add more here
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.EXAMPLE](
    state,
    payload: Parameters<Mutations[MutationTypes.EXAMPLE]>[1]
  ) {
    // payload will be of type T.ExampleResponseOne
    // update state
    // state.somethign = payload
  },

  [MutationTypes.LOADING_STATE_SET](
    state,
    payload: { uiElement: L.UIElement, currentState: L.LoaderState }
  ) {
    state.loadingStates[payload.uiElement] = payload.currentState
  },

  // Add more here
};
