import { createStore as createVuexStore } from "vuex";

import ship from "@/store/ship";
import foundationStore from "@/store/foundationStore";

export const createStore = () => {
  return createVuexStore({
    modules: {
      ship,
      foundationStore,
    },
  });
};
