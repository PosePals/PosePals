<script setup lang="ts">
defineProps(["name", "description", "pos"])
</script>

<template>
  <div class="w-1/2 relative" :class="pos == -1 ? 'ml-6 mr-3' : (pos == 1 ? 'mr-6 ml-3' : 'mx-3')">
    <img class="rounded-xl" src="../assets/pictures/yoga-vertical.jpg" alt="woman yoga">
    <div class="bg-black h-full w-full absolute z-10 top-0 rounded-xl opacity-50"></div>
    <div class="absolute bottom-0 mb-4 mx-4 z-20 text-white">
      <p class="text-xl font-bold">{{ name }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>