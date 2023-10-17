<script setup>
import { ref } from "vue";

defineProps({
  name: String,
});

const count = ref(0);

const updateName = (event) => {
  defineEmits(["update:name"])(event.target.value);
};
</script>

<template >
  <section
    class="w-1/2 text-black p-4 border-2 border-red-500 rounded-lg bg-yellow-50"
  >
    <h2 class="color">
      What's up,
      <input type="text" placeholder="Name" :value="name" @input="updateName" />
    </h2>
  </section>
  <!-- <div class="bg-blue-500 w-1/2 mx-auto p-4">
    This is a centered section with a blue background and 50% width.
  </div> -->
</template>
