<!-- <template>
  <section
    class="flex flex-col justify-center items-center text-center w-full border-2 border-grey-500"
  >
    <div class="w-2/5 h-30 text-xl font-semi-bold">
      <h3>Oops! <span class="text-red-500">Today's Page </span>coming soon!</h3>
    </div>
  </section>
</template> -->

<script setup lang="ts">
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

const el = ref(null);
const isVisible = useElementVisibility(el);
</script>

<template>
  <div>
    <note class="mb-2"> Info on the right bottom corner </note>
    <div
      ref="el"
      class="max-w-100 relative area bg-white dark:bg-gray-800 shadow-lg z-60 h-full"
    >
      Target Element (scroll down)
    </div>
  </div>
  <div class="float m-3 area shadow-lg bg-red-200 w-60">
    Element
    <span v-if="isVisible">inside</span>
    <span v-else>outside</span>
    <!-- <BooleanDisplay
      :value="isVisible"
      true="inside"
      false="outside"
      class="font-bold"
    /> -->
    the viewport
  </div>
</template>
