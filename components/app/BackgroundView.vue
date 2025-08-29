<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Circle {
  id: number;
  size: number;
  top: number;
  left: number;
  color: string;
  opacity: number;
  blur: number;
  animationDelay: number;
}

const circles = ref<Circle[]>([]);
const numCircles = 20;

// Palette de couleurs plus riche et moderne
const colors = [
  'from-violet-400 to-purple-600',
  'from-blue-400 to-indigo-600', 
  'from-cyan-400 to-teal-600',
  'from-emerald-400 to-green-600',
  'from-lime-400 to-emerald-600',
  'from-yellow-400 to-orange-600',
  'from-orange-400 to-red-600',
  'from-pink-400 to-rose-600',
  'from-fuchsia-400 to-pink-600',
  'from-purple-400 to-violet-600',
  'from-indigo-400 to-blue-600',
  'from-sky-400 to-cyan-600',
];

const generateCircles = () => {
  circles.value = Array.from({ length: numCircles }, (_, id) => ({
    id,
    size: Math.random() * 120 + 80, // Tailles plus variées
    top: Math.random() * 180, // Plus d'espace vertical
    left: Math.random() * 120,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: Math.random() * 0.3 + 0.2, // Opacité variable
    blur: Math.random() * 20 + 30, // Flou variable
    animationDelay: Math.random() * 20, // Délai d'animation
  }));
};

// Fonction pour convertir les classes Tailwind en couleurs CSS
const getGradientColors = (colorClass: string) => {
  const colorMap: Record<string, string> = {
    'from-violet-400 to-purple-600': '#a78bfa, #9333ea',
    'from-blue-400 to-indigo-600': '#60a5fa, #4f46e5',
    'from-cyan-400 to-teal-600': '#22d3ee, #0d9488',
    'from-emerald-400 to-green-600': '#34d399, #059669',
    'from-lime-400 to-emerald-600': '#a3e635, #059669',
    'from-yellow-400 to-orange-600': '#facc15, #ea580c',
    'from-orange-400 to-red-600': '#fb923c, #dc2626',
    'from-pink-400 to-rose-600': '#f472b6, #e11d48',
    'from-fuchsia-400 to-pink-600': '#e879f9, #db2777',
    'from-purple-400 to-violet-600': '#c084fc, #7c3aed',
    'from-indigo-400 to-blue-600': '#818cf8, #2563eb',
    'from-sky-400 to-cyan-600': '#38bdf8, #0891b2',
  };
  return colorMap[colorClass] || '#60a5fa, #4f46e5';
};

onMounted(generateCircles);
</script>

<template>
  <div class="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
    <!-- Couche de base avec gradients -->
    <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"></div>
    
    <!-- Cercles flottants avec effet glassmorphism -->
    <div v-for="circle in circles" :key="circle.id"
         class="absolute rounded-full bg-gradient-to-br animate-float-slow"
         :class="[
           'bg-gradient-to-br',
           `blur-[${circle.blur}px]`
         ]"
         :style="{
           width: `${circle.size}px`,
           height: `${circle.size}px`,
           top: `${circle.top}vh`,
           left: `${circle.left}vw`,
           opacity: circle.opacity,
           background: `linear-gradient(135deg, ${getGradientColors(circle.color)})`,
           animationDelay: `${circle.animationDelay}s`,
           filter: `blur(${circle.blur}px) saturate(1.2)`,
         }">
    </div>
    
    <!-- Overlay glassmorphism -->
    <div class="absolute inset-0 backdrop-blur-[0.5px] bg-white/10"></div>
    
    <!-- Grille subtile pour l'effet de profondeur -->
    <div class="absolute inset-0 opacity-[0.02]" 
         style="background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0); background-size: 20px 20px;">
    </div>
  </div>
</template>

<style scoped>
div.fixed {
  width: 100vw;
  height: 300vh;
}

/* Animation de flottement lent et subtil */
@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) translateX(5px) rotate(1deg);
  }
  50% {
    transform: translateY(0px) translateX(10px) rotate(0deg);
  }
  75% {
    transform: translateY(10px) translateX(5px) rotate(-1deg);
  }
}

.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

/* Support pour le mode motion réduite */
@media (prefers-reduced-motion: reduce) {
  .animate-float-slow {
    animation: none;
  }
}

/* Classes Tailwind custom pour les flous variables */
.blur-30 { filter: blur(30px); }
.blur-35 { filter: blur(35px); }
.blur-40 { filter: blur(40px); }
.blur-45 { filter: blur(45px); }
.blur-50 { filter: blur(50px); }
</style>