<script lang="ts">
import * as Three from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
// Define Three.js variables outside of the Vue component
let camera, scene, renderer;

export default {
  name: "WorkoutView",
  data() {
    return {
      timeElapsed: 0,
      timeLimit: 30,
      timer: undefined,
      currentState: 0,
      currentExercise: 0,
      exercise: ["Crow", "Tree", "3", "4", "5"],
      score: 0,
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      loader: null,
      loader2: null,
      done: false
    }
  },
  mounted() {
    this.startTimer()
    this.init();
    this.animate = this.animate.bind(this);
    this.animate();
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (++this.timeElapsed === this.timeLimit) {
          this.initNewValues()
        }
      }, 1000);
    },
    initNewValues() {
      this.currentState++
      if (this.currentState > 2) {
        this.currentState = 0
        this.currentExercise++
      }
      if (this.currentExercise >= this.exercise.length) {
        clearInterval(this.timer)
        this.done = true
      } else {
        switch (this.currentState) {
          case 0:
            this.timeLimit = 30
            break
          case 1:
            this.timeLimit = 120
            break
          case 2:
            this.timeLimit = 10
            break
        }
        this.timeElapsed = 0
      }
    },

init() {
  let container = document.getElementById('container');

  camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
  camera.position.z = 1;

  scene = new Three.Scene();
  renderer = new Three.WebGLRenderer({ antialias: true });
  renderer.setClearColor(0xaaaaaa);

  let ambientLight = new Three.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight); 

  // OBJ Loader
  let objLoader = new OBJLoader();
  objLoader.load('teapot.obj', (objLoader) => {
    objLoader.position.set(0, 0, 0); // Set position
    objLoader.scale.set(0.1, 0.1, 0.1); // Set scale
    scene.add(objLoader)
    console.log(objLoader);
    let box = new Three.BoxHelper(objLoader, 0xffff00);
    scene.add(box);
  }),

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
},

    animate: function () {
      requestAnimationFrame(this.animate);
      renderer.render(scene, camera);
    },
  },
  computed: {
    timeLeft() {
      var mins = Math.trunc((this.timeLimit - this.timeElapsed) / 60)
      var secs = (this.timeLimit - this.timeElapsed) % 60
      return mins + ":" + (secs < 10 ? "0" : "") + secs
    }
  }
}

</script>

<template>
  <div class="w-full absolute bottom-14 bg-stone-100 pb-8">
    <div class="flex w-full px-6 mt-6">
      <div v-for="(_, index) in exercise" class="w-1/5 mx-2 flex">
        <div class="h-1 w-1/3"
             :class="index < currentExercise || (index == currentExercise && currentState >= 0) ? 'bg-fuchsia-500' : 'bg-fuchsia-200'"></div>
        <div class="h-1 w-1/3 mx-0.5"
             :class="index < currentExercise || (index == currentExercise && currentState >= 1) ? 'bg-fuchsia-500' : 'bg-fuchsia-200'"></div>
        <div class="h-1 w-1/3"
             :class="index < currentExercise  || (index == currentExercise && currentState >= 2) ? 'bg-fuchsia-500' : 'bg-fuchsia-200'"></div>
      </div>
    </div>
    <div class="px-8 pt-3 font-bold text-lg" v-if="!done">
      {{ exercise[currentExercise] }} -
      {{ currentState == 0 ? 'Calm down' : currentState == 1 ? 'Get into position' : 'Hold' }}
    </div>
    <div class="px-8 pt-3 font-bold text-lg" v-else>
      You did it! Great job!
    </div>
    <div class="px-8">
      Current score: {{ score }}
    </div>
    <div class="px-8 text-6xl pt-4 pb-2 font-bold">
      {{ timeLeft }}
    </div>
    <div id="container" class="w-full h-96"></div>
  </div>
</template>

<style scoped>

</style>