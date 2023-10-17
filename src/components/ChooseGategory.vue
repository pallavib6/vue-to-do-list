<script setup>
defineProps({
  input_category,
});
</script>

<template>
  <section>
    <div>Pick a category</div>
    <div>
      <div>
        <input type="radio" />
        <label>Business</label>
      </div>
      <div>
        <input type="radio" />
        <label>Personal</label>
      </div>
    </div>
  </section>
</template>
