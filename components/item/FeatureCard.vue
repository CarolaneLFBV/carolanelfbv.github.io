<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  text: String,
  bg: String,
  delay: Number,
})

const visible = ref(false)
const card = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true
          if (card.value) observer.unobserve(card.value)
        }
      },
      { threshold: 0.1 }
  )
  if (card.value) observer.observe(card.value)
})
</script>

<template>
  <div
    ref="card"
    class="rounded-xl p-6 shadow-md flex flex-col justify-center items-center gap-2 transition-all duration-700 will-change-transform"
    :class="[bg, visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5']"
    :style="visible ? `animation-delay: ${delay}ms` : ''"
  >
    <div class="text-3xl w-full text-center">{{ icon }}</div>
    <div class="w-full text-center">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <p class="text-sm text-gray-600">{{ text }}</p>
    </div>
  </div>
</template>
