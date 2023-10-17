<script setup>
// import Greetings from "./Greetings.vue";
import CreateToDo from "./CreateToDo.vue";
import { ref, onMounted, computed, watch } from "vue";
import { TODO_STORAGE_KEY } from "../constants";

const all_ToDos = ref(JSON.parse(localStorage.getItem(TODO_STORAGE_KEY)) || []);

// const name = ref("");
</script>

<template>
  <div>
    <div class="w-full flex items-center flex-col gap-2 mt-5 p-4">
      <!-- <Greetings :name="name" /> -->
      <CreateToDo :all_ToDos="all_ToDos" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
