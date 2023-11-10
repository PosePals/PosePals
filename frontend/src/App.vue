<script setup lang="ts">
import WorkoutCard from "@/components/WorkoutCard.vue";
</script>

<template>
  <header class="p-5 border-b flex text-center text-xl justify-center text-black">
    <div class="w-1/5">
      <font-awesome-icon :icon="['fas', 'cog']"/>
    </div>
    <div class="w-3/5 text-base flex-grow flex items-center justify-center">
      Competitive Yoga
    </div>
    <div class="w-1/5">
      <font-awesome-icon :icon="['fas', 'bell']"/>
    </div>
  </header>

  <main>
    <WorkoutCard></WorkoutCard>
  </main>

  <footer class="w-full flex absolute bottom-0 text-xl bg-black px-4 text-white rounded-tl-2xl rounded-tr-2xl py-5">
    <div class="w-1/4 px-5">
      <div class="bg-fuchsia-600 rounded-lg p-1 m-auto w-5/6 text-center">
        <font-awesome-icon :icon="['fas', 'home']"/>
      </div>
    </div>
    <div class="w-1/4 px-4">
      <div class="bg-black rounded p-1 m-auto w-5/6 text-center">
        <font-awesome-icon :icon="['fas', 'walking']"/>
      </div>
    </div>
    <div class="w-1/4 px-4">
      <div class="bg-black rounded p-1 m-auto w-5/6 text-center">
        <font-awesome-icon :icon="['fas', 'medal']"/>
      </div>
    </div>
    <div class="w-1/4 px-4">
      <div class="bg-black rounded p-1 m-auto w-5/6 text-center">
        <font-awesome-icon :icon="['fas', 'user']"/>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
