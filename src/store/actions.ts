import { ActionTree, ActionContext, DispatchOptions } from "vuex";
import { State } from "./state";
import { Getters } from "./getters";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

import * as T from '@/types'

import airlock from "@/api";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.EXAMPLE](
    { commit }: AugmentedActionContext,
    payload: string
  ): void;
  // Add more here.
}

export const actions: ActionTree<State, State> & Actions = {
  [ActionTypes.AIRLOCK_OPEN]({ commit, dispatch }, deskName: string) {

    airlock.openAirlockTo(
      deskName,

      // Main all-responses-handler
      (data: T.GallResponse) => {
        if (T.IsResponseOne(data)) {
          dispatch(ActionTypes.EXAMPLE, data.test.thing as string);
        }
        // if (T.IsResponseTwo(data)) {
        //   dispatch(ActionTypes.EXAMPLE, data.testTwo.thing as string);
        // }
      },

      (subscriptionNumber: number) => {
        // Thing to do on subscription callback, if anything
      }
    );
  },

  [ActionTypes.EXAMPLE](
    { commit, getters },
    payload: string
  ) {
    console.log('dispatching EXAMPLE action...')
    console.log('getters ', getters) // Access to getters
    commit(MutationTypes.EXAMPLE, 'test')
  },

  // Add more here

};
