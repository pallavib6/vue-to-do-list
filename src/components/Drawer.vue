<script setup>
import { defineProps, defineEmits } from "vue";

import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps(["isDrawerOpen"]);

const emits = defineEmits(["update-show-drawer"]);
const handleisDrawerOpenButtonClick = () => {
  emits("update-show-drawer", !props.isDrawerOpen);
};

const isCurrentRoute = (routeURL) => {
  // Check if the current route matches the given routeURL
  return route.path === routeURL;
};

const ALL_POSSIBLE_OPTIONS = [
  {
    label: "Inbox",
    labelIcon:
      '<img width="20" height="30" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/inbox.png" alt="inbox"/>',
    routeURL: "/inbox",
  },
  {
    label: "Today",
    labelIcon:
      '<img width="20" height="20" src="https://img.icons8.com/color/48/event-accepted-tentatively.png" alt="event-accepted-tentatively"/>',
    routeURL: "/today",
  },
  {
    label: "Upcoming",
    labelIcon:
      '<img width="20" height="20" src="https://img.icons8.com/dusk/64/event-accepted-tentatively.png" alt="event-accepted-tentatively"/>',
    routeURL: "/upcoming",
  },
  {
    label: "Filters & Labels",
    labelIcon:
      '<img width="20" height="20" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/multiple-inputs.png" alt="multiple-inputs"/>',
    routeURL: "/filters",
  },
];
</script>

<template>
  <section>
    <div
      v-if="isDrawerOpen"
      id="drawer-example"
      :class="{
        'translate-x-0': isDrawerOpen,
        '-translate-x-full': !isDrawerOpen,
      }"
      class="fixed top-10 left-0 z-40 h-screen p-4 bg-gray-100 w-80"
      tabindex="-1"
    >
      <!-- <span @click="handleisDrawerOpenButtonClick" class="cursor-pointer"
        >X</span
      > -->
      <div
        v-for="(values, key, index) in ALL_POSSIBLE_OPTIONS"
        :key="index"
        :class="{
          'flex flex-row p-2 items-center hover:bg-gray-200 cursor-pointer rounded': true,
          'bg-gray-200': isCurrentRoute(values.routeURL),
        }"
      >
        <span v-html="values.labelIcon" class="p-1"></span>
        <router-link :to="values.routeURL" class="p-1 w-full">{{
          values.label
        }}</router-link>
      </div>
    </div>
  </section>
</template>
