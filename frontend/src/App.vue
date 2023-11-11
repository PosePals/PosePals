<script setup lang="ts">
import {computed, ref} from "vue";
import WorkoutCard from "./components/WorkoutCard.vue";
import Workouts from "@/components/Workouts.vue";
import Scoreboard from "@/components/Scoreboard.vue";

const currView = ref(2);
</script>

<template>
  <header class="z-50 fixed w-full bg-white">
    <div class="p-5 border-b flex text-center text-xl justify-center text-black">
      <div class="w-1/5" v-on:click="currView = 4" :class="currView == 4 ? 'text-fuchsia-600' : ''">
        <font-awesome-icon :icon="['fas', 'cog']"/>
      </div>
      <div class="w-3/5 text-base flex-grow flex items-center justify-center">
        Competitive Yoga
      </div>
      <div class="w-1/5" v-on:click="currView = 5" :class="currView == 5 ? 'text-fuchsia-600' : ''">
        <font-awesome-icon :icon="['fas', 'bell']"/>
      </div>
    </div>
  </header>

  <main class="pt-20 py-24" v-if="currView == 0">
    <div class="px-6 mb-9 mt-4">
      <WorkoutCard headline="Recommended workout for the day" workout-name="Full body"
                   workout-description="Relax from daily stress and calm down"></WorkoutCard>
    </div>
    <div class="px-6">
      <hr/>
    </div>
    <div class="mt-5">
      <p class="text-xl font-bold px-6 mb-4">Other workouts</p>
      <div class="overflow-y-scroll scrollbar-hide" style="display: ruby block">
        <Workouts pos="-1" name="Arms" description="Calm and cool"></Workouts>
        <Workouts name="Back" description="Chill and relax"></Workouts>
        <Workouts pos="1" name="Legs" description="To calm down"></Workouts>
      </div>
    </div>
  </main>

  <main class="pt-20 py-24" v-else-if="currView == 1">

  </main>

  <main class="pt-20 py-24" v-else-if="currView == 2">
    <div class="px-6 mb-9 mt-4 text-xl font-bold">
      Scoreboard
    </div>
    <div class="px-6">
      <Scoreboard></Scoreboard>
    </div>
  </main>

  <main class="pt-20 py-24" v-else-if="currView == 3">
    <div class="px-6 mb-9 mt-4 text-xl font-bold">
      Account
    </div>
  </main>

  <main class="pt-20 py-24" v-else-if="currView == 4">
    <div class="px-6 mb-9 mt-4 text-xl font-bold">
      Settings
    </div>
  </main>

  <main class="pt-20 py-24" v-else-if="currView == 5">
    <div class="px-6 mb-9 mt-4 text-xl font-bold">
      Notifications
    </div>
  </main>

  <footer class="z-50 w-full flex fixed bottom-0 text-xl bg-black px-4 text-white rounded-tl-2xl rounded-tr-2xl py-5">
    <div class="w-1/4 px-5" v-on:click="currView = 0">
      <div class="rounded-lg p-1 m-auto w-5/6 text-center" :class="currView == 0 ? 'bg-fuchsia-600' : 'bg-black'">
        <font-awesome-icon :icon="['fas', 'home']"/>
      </div>
    </div>
    <div class="w-1/4 px-4" v-on:click="currView = 1">
      <div class="rounded p-1 m-auto w-5/6 text-center" :class="currView == 1 ? 'bg-fuchsia-600' : 'bg-black'">
        <font-awesome-icon :icon="['fas', 'walking']"/>
      </div>
    </div>
    <div class="w-1/4 px-4" v-on:click="currView = 2">
      <div class="rounded p-1 m-auto w-5/6 text-center" :class="currView == 2 ? 'bg-fuchsia-600' : 'bg-black'">
        <font-awesome-icon :icon="['fas', 'trophy']"/>
      </div>
    </div>
    <div class="w-1/4 px-4" v-on:click="currView = 3">
      <div class="rounded p-1 m-auto w-5/6 text-center" :class="currView == 3 ? 'bg-fuchsia-600' : 'bg-black'">
        <font-awesome-icon :icon="['fas', 'user']"/>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
