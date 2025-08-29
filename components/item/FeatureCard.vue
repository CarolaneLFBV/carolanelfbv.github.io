<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type Variant = 'violet' | 'green' | 'blue' | 'amber' | 'pink' | 'indigo'

const emit = defineEmits<{
  click: []
}>()

const props = withDefaults(defineProps<{
  title: string
  text: string
  variant?: Variant
  delay?: number
  as?: 'div' | 'a' // si tu veux en faire un lien
  href?: string
  isActive?: boolean
  clickable?: boolean
}>(), {
  variant: 'violet',
  delay: 0,
  as: 'div',
  isActive: false,
  clickable: false,
})

const visible = ref(false)
const el = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      visible.value = true
      if (el.value) observer?.unobserve(el.value)
    }
  }, { threshold: 0.15 })
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer?.disconnect())

const variantClasses: Record<Variant, string> = {
  violet: 'from-violet-50 to-fuchsia-50 border-violet-100',
  green:  'from-emerald-50 to-teal-50   border-emerald-100',
  blue:   'from-sky-50    to-indigo-50  border-sky-100',
  amber:  'from-amber-50  to-orange-50  border-amber-100',
  pink:   'from-pink-50   to-rose-50    border-pink-100',
  indigo: 'from-indigo-50 to-violet-50  border-indigo-100',
}

const activeVariantClasses: Record<Variant, string> = {
  violet: 'from-violet-100 to-fuchsia-100 border-violet-200 ring-2 ring-violet-200',
  green:  'from-emerald-100 to-teal-100   border-emerald-200 ring-2 ring-emerald-200',
  blue:   'from-sky-100    to-indigo-100  border-sky-200 ring-2 ring-sky-200',
  amber:  'from-amber-100  to-orange-100  border-amber-200 ring-2 ring-amber-200',
  pink:   'from-pink-100   to-rose-100    border-pink-200 ring-2 ring-pink-200',
  indigo: 'from-indigo-100 to-violet-100  border-indigo-200 ring-2 ring-indigo-200',
}
</script>

<template>
  <component
    :is="as"
    ref="el"
    :href="as === 'a' ? href : undefined"
    class="group relative isolate overflow-hidden rounded-2xl p-5 sm:p-6
           border bg-gradient-to-br shadow-sm
           transition-all duration-300 will-change-transform
           focus:outline-none focus-visible:ring-2 focus-visible:ring-black/10
           motion-reduce:transition-none motion-reduce:hover:translate-y-0
           motion-reduce:transform-none"
    :class="[
      isActive ? activeVariantClasses[variant] : variantClasses[variant],
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
      clickable ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg' : '',
      isActive ? 'shadow-md scale-[1.02]' : 'hover:shadow-md',
    ]"
    :style="visible ? `transition-delay:${delay}ms` : undefined"
    role="region"
    :aria-label="title"
    :tabindex="clickable ? 0 : undefined"
    @click="clickable ? emit('click') : undefined"
    @keydown.enter="clickable ? emit('click') : undefined"
    @keydown.space.prevent="clickable ? emit('click') : undefined"
  >
    <!-- Icône -->
    <div class="mb-4 inline-flex size-10 items-center justify-center rounded-xl
                bg-white/70 backdrop-blur border border-white/60 text-gray-700">
      <slot name="icon">
        <!-- fallback si pas d'icône -->
        <span aria-hidden="true">✨</span>
      </slot>
    </div>

    <!-- Texte -->
    <h3 class="text-base font-semibold text-gray-900">{{ title }}</h3>
    <p class="mt-1 text-sm leading-6 text-gray-600">
      {{ text }}
    </p>

    <!-- Halo d’accent -->
    <div
      class="pointer-events-none absolute -right-8 -bottom-8 size-32 rounded-full opacity-40 blur-3xl
             transition group-hover:opacity-60 motion-reduce:transition-none"
      :class="{
        violet:'bg-violet-300', green:'bg-emerald-300', blue:'bg-sky-300',
        amber:'bg-amber-300',  pink:'bg-pink-300',     indigo:'bg-indigo-300'
      }[variant]"
      aria-hidden="true"
    />
  </component>
</template>

<!-- <script setup>
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
</template> -->
