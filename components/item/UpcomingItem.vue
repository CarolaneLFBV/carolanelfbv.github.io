<template>
  <div
      ref="block"
      class="transition-all duration-700 will-change-transform opacity-0 translate-y-5"
      :class="{ 'opacity-100 translate-y-0': visible }"
      :style="visible ? `transition-delay: ${delay}ms` : ''"
  >
    <h4 class="font-semibold text-lg">{{ title }}</h4>
    <p class="text-sm text-gray-600">{{ text }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

defineProps({
  title: String,
  text: String,
  delay: Number
})

const visible = ref(false)
const block = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      if (block.value) observer.unobserve(block.value)
    }
  }, { threshold: 0.2 })

  if (block.value) observer.observe(block.value)
})
</script>