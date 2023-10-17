<script setup>
import { ref, watch, defineEmits, computed } from "vue";

const { currentPage, totalPages } = defineProps(["currentPage", "totalPages"]);
const emits = defineEmits("update:currentPage");

const setCurrentPage = (page) => {
  emits("update:currentPage", page);
};

watch(
  () => currentPage,
  (newValue) => {
    currentPage.value = newValue;
  }
);
</script>

<template>
  <div class="pagination flex justify-center items-center mt-5 mb-5">
    <button
      @click="currentPage > 1 && setCurrentPage(currentPage - 1)"
      :disabled="currentPage === 1"
      class="px-3 py-1"
    >
      <img
        class="rotate-180 hover:bg-gray-300"
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/right-squared--v1.png"
        alt="right-squared--v1"
      />
    </button>
    <span class="mr-2">Page {{ currentPage }} of {{ totalPages }}</span>
    <button
      @click="currentPage < totalPages && setCurrentPage(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="px-3 py-1"
    >
      <img
        width="20"
        height="20"
        src="https://img.icons8.com/ios/50/right-squared--v1.png"
        alt="right-squared--v1"
        class="hover:bg-gray-300"
      />
    </button>
  </div>
</template>
