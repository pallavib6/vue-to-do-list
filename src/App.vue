<script setup>
import ToDoList from "./components/ToDoList.vue";
import { ref } from "vue";
import Drawer from "./components/Drawer.vue";
import Header from "./components/Header.vue";

const isDrawerOpen = ref(false);
const updateisDrawerOpen = (value) => {
  isDrawerOpen.value = value;
};
</script>

<template>
  <div>
    <Header
      :isDrawerOpen="isDrawerOpen"
      @update-show-drawer="updateisDrawerOpen"
    ></Header>
    <div>
      <!-- Below code is if you dont want to allow doing anything when drawer is open -->
      <!-- <div
        v-if="isDrawerOpen"
        @click="updateisDrawerOpen"
        class="fixed inset-0 bg-black opacity-50 transition-opacity z-40"
      ></div> -->
      <Drawer
        :isDrawerOpen="isDrawerOpen"
        @update-show-drawer="updateisDrawerOpen"
      ></Drawer>
      <div
        :class="{ 'ml-64': isDrawerOpen }"
        class="transition-all ease-in-out"
      >
        <router-view></router-view>
      </div>
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
