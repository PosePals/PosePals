<script setup lang="ts">
defineProps(["headline", "workoutName", "workoutDescription"])
</script>

<template>
  <p class="text-xl font-bold mb-4">{{ headline }}</p>
  <div class="relative text-white">
    <img class="rounded-xl" src="../assets/pictures/woman-yoga.jpg" alt="yoga woman"/>
    <div class="bg-black h-full w-full absolute z-10 top-0 rounded-xl opacity-50"></div>
    <div class="absolute bottom-0 mb-4 mx-4 z-20">
      <p class="text-xl font-bold">{{ workoutName }}</p>
      <p>{{ workoutDescription }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>