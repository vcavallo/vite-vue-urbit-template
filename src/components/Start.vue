<template>
  <h1>Hello world</h1>
  This is Start.vue. Be sure to open this file and change <pre>const deskname</pre> to the name of your desk.
  You'll find tailwind css at <span class="your-class-here">src/index.css</span>.
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue';
import { useStore } from '@/store/store'
import { ActionTypes } from '@/store/action-types';
import { GetterTypes } from '@/store/getter-types';

import { Pokes, Scries } from "@/api/myAppAPI"

const store = useStore()

onMounted(() => {
  // TODO:
  const deskname = 'my-app'
  // TODO:
  startAirlock(deskname)
})

onUnmounted(() => {
  // Maybe:
  // closeAirlock()
})

const computedThings = computed(() => store.state.exampleThings)
const fromGetters = computed(() => {
  return store.getters[GetterTypes.EXAMPLE_WITH_ARG]('arg here');
})

const somePoke = () => {
  return Pokes.SomePoke('here is a string')
}
const someScry = () => {
  return Scries.Thing()
}

const startAirlock = (deskname: string) => {
  store.dispatch(ActionTypes.AIRLOCK_OPEN, deskname)
}

const closeAirlock = () => {
  // Maybe you want this.
}
</script>


