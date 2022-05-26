<template>
  <h1>Hello world</h1>
  This is Start.vue
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  mounted() {
    const deskname = "pick" // TODO: change to your desk
    this.startAirlock(deskname);
  },
  unmounted() {
    this.closeAirlocks();
  },

  methods: {
    startAirlock(deskname) {
      this.$store.dispatch("ship/openAirlockToAgent", deskname);
    },
    closeAirlocks() {
      this.$store.dispatch("ship/closeAgentAirlocks");
    },
  },
})
</script>


