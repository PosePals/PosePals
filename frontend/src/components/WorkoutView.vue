<script lang="ts">
import * as Three from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// Define Three.js variables outside of the Vue component
let camera, scene, renderer, controls;

/*function getBase64Img() {
  return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEX////7+/vr6+vNzc2qqqplywBWrQD/Y5T/JTf+AADmAABeeEQvNydqAAAGBAMAAAGoF14oAAAEBUlEQVR42u2WTUwUVxzA/2925LIojsyqCLtMqSQeFJeFROPHstjdNkZdkaiX9mRTovYgSYNFE43Rg5IeNG5SqyaVcGzXkvTm7hZWq9bKriAYYzSLBI3WAplp0jY2kV3fzPuYGcBxD/bmO0zevPeb//f7v0FQ5EDvwf8LFG89ixYDol9Wo+smKal2sHF6kM6q7qbE5tY03d7SHR6ygiuvwY1txkzIlPaD3NQ4Zryk/PCP1wKibBlI97dq+idXUxqgcEkVnruS/smRpuWaCbrHU5pc/wyTQsata0U77wVBTlRP9UNkT9oE61K9AHL9VERbeTVurMjNm54mqrFw8CwKmWBfpf6V2Dx/TdxN3YjMf2JwIEZ8JnjnEbEjvLAQZ1EKlxkciJ9UcdD1Z5ztDmgsgPIrMkWtMgfd41xOYXZOIjUcLB3tdchypHWIgb5k2gH0nE0zMHjRCRTLWxgY/VQrDuybcAQ/DDEwmwEn8COlSDBcTUE0GXcEjRzqoDDhDH7sfccg2szAt9hogjBFQFRmDyd9N1VTEFegXXKEVKQFJHEUd0DSKhLthIm0HSQpnNdCNizgq147GP0m7QTygNMye6NqM9ekwlG4kLI5I4cMZ+bVhMA8MwX1rw9oIjakAYX6jXlBRRJ4BF6PwmRSfQyLFhJwWy/IG8khKuirljODG0DfGAd3qCBNEol5vCqFAxqYLeUyB0H2A2Q0DspRD3BQfJEc5KBl6KprG6pNEPqqfkKzOQBsha2bQeVw6g3nSySaGYgb99ylhsLDLVYQ3E+oozOGHKzVbCBs+HkuUm6ivd4E0ZYeNTPTTrn51+0wA9TJgpZVLeaV1y+4yS8c64W0/AcFTBCHK/fFEMwFAmo4KRldE0ZxsF8cGbTuzYqHtOz8t6e8TMk5CcjNSC+kdcfgPyag9AoDhUQARmvAcIiAW3v0JzWJg64BJXdBQ21+/b4zwMqRW5dA2h3I7+onYJd+Y4i3FbyMxz4hxE7hS2MBdSq6Fgq6Bny/dxv6Sk76COj6Yz91ZG8dToQ7oYNCqu4QjX9FK5UoPt/PXO701mruhwcxGP2ecahzzxBtUtlzLHclsXtBA6wc+a2brlUc8TCvg5cPM7LiaOPT8Y4ub3bpAbqy+MQ18xRmvIe5nr83YXDt8Nca0/GveWniSHByybEVwx1dD1ccYB/6yF8DTaGcYLFA391o6DjjohaWfKXQ/xCWazmhPDhNbYf2WH4fse9zhRUkLwrXlUD+9iVD5HR77KWheclxkqsZ1bM+pqcWZ2xVe0zXjPb6pyO8IK1l5trcA7mLKuo48+VpQG0BuPmZeTbs9Vi+9oQyqv6Ieyou4FybU+HqRS4o+TH1VG7MvgFFjvfguwFfA4FobmCxcnTPAAAAAElFTkSuQmCC';
}
var base64img = getBase64Img();
function Base64ToImage(base64img, callback) {
  var img = new Image();
  img.onload = function() {
    callback(img);
  };
  img.src = base64img;
}
Base64ToImage(base64img, function(img) {
  document.getElementById('main').appendChild(img);
  var log = 'w=' + img.width + ' h=' + img.height;
  document.getElementById('log').value = log;
});*/


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
            this.timeLimit = 10
            break
          case 2:
            this.timeLimit = 120
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
  renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  const directionalLight = new Three.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);
  let ambientLight = new Three.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight); 
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Enable smooth animation
  controls.dampingFactor = 0.1; // Damping factor
  controls.enableZoom = true; // Enable zooming
  controls.maxDistance = 2; // Set the maximum zoom level (distance from the target)
  controls.minDistance = 0.3; // Set the maximum zoom level (distance from the target)


  // OBJ Loader
  let objLoader = new OBJLoader();
  objLoader.load('poses/lotus.obj', (object) => {
    const boundingBox = new Three.Box3().setFromObject(object);
     // Get size of the bounding box
    const objsize = new Three.Vector3();
    boundingBox.getSize(objsize);
    // Determine the desired size (you can adjust this)
    const desiredSize = 1; // For example, you want the largest dimension to be 5 units
    // Calculate the scale factor
    const scaleFactor = desiredSize / Math.max(objsize.x, objsize.y, objsize.z);
    // Apply the scale factor
    object.scale.set(scaleFactor, scaleFactor, scaleFactor);
    // Get size of the bounding box
    const size = new Three.Vector3();
    boundingBox.getSize(size);
    object.position.set(0, 0, 0); // Set position
    object.traverse((child) => {
    if (child.isMesh) {
        child.material.color.set(0xFFB6C1); // Set to blue for example
    }
    });
    scene.add(object)
    //for debugging: Log object to console
    //console.log(object);
    //for debugging: show bounding box of object.
    //let box = new Three.BoxHelper(object, 0xffff00);
    //scene.add(box);
  }),

  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
},

    animate: function () {
      requestAnimationFrame(this.animate);
      controls.update();
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
    <div class="flex mx-8">
      <div class="w-7/12">
        <div class="pt-3 font-bold text-lg" v-if="!done">
          {{ exercise[currentExercise] }} -
          {{ currentState == 0 ? 'Calm down' : currentState == 1 ? 'Get into position' : 'Hold' }}
        </div>
        <div class="pt-3 font-bold text-lg" v-else>
          You did it! Great job!
        </div>
        <div>
          Current score: {{ score }}
        </div>
        <div class="text-6xl pt-4 pb-2 font-bold">
          {{ timeLeft }}
        </div>
      </div>
      <div class="w-5/12 flex pt-3">
        <div id="container" class="h-40 w-full"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>