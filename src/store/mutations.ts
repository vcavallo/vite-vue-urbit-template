import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "./state";
import * as T from "@/types";
import { sigShip } from "@/helpers"

export type Mutations<S = State> = {
  [MutationTypes.EXAMPLE](
    state: S,
    payload: string
  ): void;
  // Add more here
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.EXAMPLE](
    state,
    payload: string
  ) {
    // update state
    // state.somethign = payload
  },
  // Add more here
};
