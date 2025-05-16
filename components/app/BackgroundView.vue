<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Circle } from '@/types/circle';

const circles = ref<Circle[]>([]);
const numCircles = 15;

const colors = [
  'bg-red-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-yellow-400',
  'bg-orange-400',
  'bg-purple-400'
];

const generateCircles = () => {
  circles.value = Array.from({ length: numCircles }, (_, id) => ({
    id,
    size: Math.random() * 100 + 50, 
    top: Math.random() * 150,
    left: Math.random() * 110,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
};

onMounted(generateCircles);
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-[-1]">
    <div v-for="circle in circles" :key="circle.id"
         :class="[circle.color, 'absolute rounded-full opacity-40 blur-2xl']"
         :style="{
           width: `${circle.size}px`,
           height: `${circle.size}px`,
           top: `${circle.top}vh`,
           left: `${circle.left}vw`
         }">
    </div>
  </div>
</template>

<style scoped>
div.fixed {
  width: 100vw;
  height: 300vh;
}
</style>