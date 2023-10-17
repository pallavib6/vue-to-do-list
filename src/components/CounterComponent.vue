<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>Vue 3 Counter</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>


