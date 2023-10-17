<script setup>
import { defineEmits, ref } from "vue";
import { storeToRefs } from "pinia";
// import { useCounterStore } from "../store/counter.store";
import { useCommonStore } from "../store/common.store";

const props = defineProps(["isDrawerOpen"]);
const emits = defineEmits(["update-show-drawer"]);
// const searchInputValue = ref("");
const inputBgColor = ref("bg-red-300 bg-opacity-50");

// const store = useCounterStore();

// const { Count } = storeToRefs(store);

// const { incrementCount } = store;

const store = useCommonStore();
const { IntialSearchValue } = storeToRefs(store);
const { updateSeachField } = store;

const updateInputBgColor = (colorClass) => {
  inputBgColor.value = colorClass;
};
const handleisDrawerOpenButtonClick = () => {
  emits("update-show-drawer", !props.isDrawerOpen);
};
const handleSeachInputChange = (event) => {
  updateSeachField(event.target.value);
};
</script>

<template>
  <section>
    <div
      class="w-full bg-red-500 flex justify-between flex-row h-10 items-center"
    >
      <div class="w-2/5 flex flex-row items-center">
        <button
          @click="handleisDrawerOpenButtonClick"
          class="p-2 cursor-pointer"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png"
            alt="menu--v1"
          />
        </button>
        <span class="p-2">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/windows/32/FFFFFF/home.png"
            alt="home"
          />
        </span>

        <!-- v-model="searchInputValue" -->
        <div class="rounded m-3 hidden md:block">
          <input
            type="text"
            placeholder="Search Here"
            class="text-sm pl-4 h-8 text-white bg-red-300 bg-opacity-50 rounded border-none placeholder-white focus:outline-none focus:border-transparent"
            :class="inputBgColor"
            @input="handleSeachInputChange"
            @focus="updateInputBgColor('bg-white border-none')"
            @blur="updateInputBgColor('bg-red-300 bg-opacity-50')"
          />
        </div>
        <!-- <span> count : {{ Count }}</span>
        <button @click="incrementCount">Increment Counter</button> -->
      </div>
      <div class="w-3/5 flex flex-row justify-end items-center">
        <div class="hidden md:block">
          <div
            class="bg-red-300 bg-opacity-50 rounded m-3 h-8 flex items-center"
          >
            <span class="text-white p-4 text-sm">Upgrade to Pro</span>
          </div>
        </div>
        <div class="p-2 cursor-pointer">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/android/24/FFFFFF/plus.png"
            alt="plus"
          />
        </div>
        <div class="p-2 cursor-pointer">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/ios/50/FFFFFF/circled-up-right-2.png"
            alt="circled-up-right-2"
          />
        </div>
        <div class="p-2 cursor-pointer">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/FFFFFF/add-reminder.png"
            alt="add-reminder"
          />
        </div>
        <div class="p-2 cursor-pointer">
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/ios/50/FFFFFF/help--v1.png"
            alt="help--v1"
          />
        </div>
        <div class="p-2 cursor-pointer">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/user-female-circle--v1.png"
            alt="user-female-circle--v1"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.placeholder-white::placeholder {
  color: white;
}
</style>