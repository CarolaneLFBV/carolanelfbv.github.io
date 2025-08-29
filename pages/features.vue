<script setup lang="ts">
import CardFeature from '~/components/item/FeatureCard.vue'
const { t } = useI18n()

type Variant = 'amber' | 'green' | 'blue' | 'amber' | 'pink' | 'indigo'
type FeatureKey = 'projects'|'tasks'|'notes'|'stats'|'ui'|'sync'

const features: Array<{
  title: string; text: string; variant: Variant; icon: FeatureKey
}> = [
  { icon:'projects', title: t('projectTitle'), text: t('projectText'), variant:'amber'  },
  { icon:'tasks',    title: t('taskTitle'),    text: t('taskText'),    variant:'green'  },
  { icon:'notes',    title: t('noteTitle'),    text: t('noteText'),    variant:'blue'   },
  { icon:'stats',    title: t('graphTitle'),   text: t('graphText'),   variant:'amber'  },
  { icon:'ui',       title: t('styleTitle'),   text: t('styleText'),   variant:'pink'   },
  { icon:'sync',     title: t('syncTitle'),    text: t('syncText'),    variant:'indigo' },
]

const selectedFeature = ref<FeatureKey>('projects')

const featureImages: Record<FeatureKey, string> = {
  projects: '/image-projecteditor.png',
  tasks: '/image-tasklist.png', 
  notes: '/image-noteslist.png',
  stats: '/image-overview.png', 
  ui: '/image-homeview.png', 
  sync: '/image-devices.png',
}

const selectFeature = (featureIcon: FeatureKey) => {
  selectedFeature.value = featureIcon
}

const iconPaths = {
  projects: 'M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z',
  tasks: 'M4 6h16M4 12h7M4 18h7',
  tasksExtra: 'M15 11l2 2 4-4',
  notes: 'M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z',
  notesCorner: 'M14 3v5h5',
  notesLines: 'M9 13h6M9 17h6',
  stats: 'M3 20.5h18',
  statsLine: 'M5.5 15.5l4-4 3.5 3.5 5-5',
  statsArrow: 'M18 6.5h3v3',
  ui: 'M8 7h8M8 11h8M8 15h5',
  sync: 'M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6'
}

const iconColors = {
  projects: 'text-orange-700',
  tasks: 'text-emerald-700', 
  notes: 'text-sky-700',
  stats: 'text-orange-700',
  ui: 'text-rose-700',
  sync: 'text-indigo-700'
}
</script>

<template>
  <section class="relative px-6 py-16 md:py-24">
    <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
      <!-- Cartes -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <CardFeature
          v-for="(f, i) in features"
          :key="i"
          :title="f.title"
          :text="f.text"
          :variant="f.variant"
          :delay="i * 80"
          :isActive="selectedFeature === f.icon"
          :clickable="true"
          @click="selectFeature(f.icon)"
        >
          <template #icon>
            <svg viewBox="0 0 24 24" fill="none" class="size-5 stroke-[1.5]" :class="iconColors[f.icon]" aria-hidden="true">
              <!-- Projects icon -->
              <path v-if="f.icon === 'projects'" :d="iconPaths.projects" stroke="currentColor"/>
              
              <!-- Tasks icon -->
              <template v-else-if="f.icon === 'tasks'">
                <path :d="iconPaths.tasks" stroke="currentColor" stroke-linecap="round"/>
                <path :d="iconPaths.tasksExtra" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </template>
              
              <!-- Notes icon -->
              <template v-else-if="f.icon === 'notes'">
                <path :d="iconPaths.notes" stroke="currentColor"/>
                <path :d="iconPaths.notesCorner" stroke="currentColor"/>
                <path :d="iconPaths.notesLines" stroke="currentColor" stroke-linecap="round"/>
              </template>
              
              <!-- Stats icon -->
              <template v-else-if="f.icon === 'stats'">
                <path :d="iconPaths.stats" stroke="currentColor" stroke-linecap="round"/>
                <path :d="iconPaths.statsLine" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path :d="iconPaths.statsArrow" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </template>
              
              <!-- UI icon -->
              <template v-else-if="f.icon === 'ui'">
                <rect x="4" y="3" width="16" height="18" rx="3" stroke="currentColor"/>
                <path :d="iconPaths.ui" stroke="currentColor" stroke-linecap="round"/>
              </template>
              
              <!-- Sync icon -->
              <path v-else-if="f.icon === 'sync'" :d="iconPaths.sync" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </CardFeature>
      </div>

      <!-- Dynamic Mockup -->
      <div class="flex justify-center">
        <div class="relative">
          <NuxtImg
            :src="featureImages[selectedFeature]"
            :alt="`Keepio ${selectedFeature} feature on iPhone`"
            loading="lazy"
            class="max-w-[260px] md:max-w-xs lg:max-w-sm opacity-0 translate-y-2
                   transition duration-700 will-change-transform animate-[fadeIn_.7s_forwards]
                   transition-all duration-500 ease-in-out"
            :key="selectedFeature"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes fadeIn { to { opacity: 1; transform: translateY(0) } }
@media (prefers-reduced-motion: reduce) {
  .transition, .animate-\[fadeIn_.7s_forwards\] { transition: none !important; animation: none !important; opacity: 1 !important; transform: none !important; }
}
</style>