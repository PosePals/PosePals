<script setup lang="ts">
import {onMounted, ref} from "vue";

const scoreboardItems = ref([]);

async function getData() {
  //const res = await fetch("xyz");
  //scoreboardItems.value = await res.json();
  scoreboardItems.value = [["Kitty Smith", 8251], ["Elli Potter", 2353], ["Nev Longbottom", 1245], ["Luna Lovegood", 523], ["Bella Lestrange", 135], ["Severus Snape", 6], ["Albus Dumble", 5], ["Ron Weasley", 2], ["Harry Potter", 2], ["Ginny Weasley", 1]]
}

onMounted(() => {
  getData()
})
</script>

<template>
  <div v-for="(item, index) in scoreboardItems">
    <div v-if="index < 3" class="flex justify-center items-center mb-5">
      <font-awesome-icon :icon="['fas', 'trophy']" v-if="index == 0" class="w-1/6 text-amber-500 text-4xl"/>
      <font-awesome-icon :icon="['fas', 'trophy']" v-else-if="index == 1" class="w-1/6 text-stone-400 text-4xl"/>
      <font-awesome-icon :icon="['fas', 'trophy']" v-else-if="index == 2" class="w-1/6 text-amber-700 text-4xl"/>
      <div class="px-4 w-2/3">
        <p class="text-lg font-bold">{{ item[0] }}</p>
        <p>{{ item[1] }} Points</p>
      </div>
      <img src="../assets/pictures/cat.jpg" alt="profile picture" class="rounded-xl w-1/6 shadow-md"/>
    </div>

    <div v-else class="flex justify-center items-center mb-2">
      <p class="w-1/12 text-center" :class="index == 0 ? 'text-amber-500 text-xl' : index == 1 ? 'text-stone-400 text-xl' : index == 2 ? 'text-amber-700 text-xl' : 'text-black'">{{ index+1 }}</p>
      <img src="../assets/pictures/cat.jpg" alt="profile picture" class="ml-4 rounded-xl w-1/6 shadow-md"/>
      <div class="w-9/12 px-4">
        <p class="text-lg font-bold">{{ item[0] }}</p>
        <p>{{ item[1] }} Points</p>
      </div>
    </div>
    <hr v-if="index == 2" class="mb-4"/>
  </div>
</template>

<style scoped>

</style>