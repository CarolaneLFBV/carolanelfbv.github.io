<template>
  <section class="relative px-6 py-16 md:py-24">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FeatureCard
            v-for="(feature, i) in features"
            :key="i"
            :icon="feature.icon"
            :title="feature.title"
            :text="feature.text"
            :bg="feature.bg"
            :delay="i * 100"
        />
      </div>

      <div class="flex justify-center">
        <NuxtImg
            src="/images/mockup-overview.png"
            alt="Mockup Overview"
            class="max-w-[250px] md:max-w-xs lg:max-w-sm opacity-0 animate-fade-in"
            style="animation-delay: 0.5s"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from "~/components/item/FeatureCard.vue";

const { t } = useI18n();
const features = [
  {
    icon: '📁',
    title: t('projectTitle'),
    text: t('projectText'),
    bg: 'bg-orange-50',
  },
  {
    icon: '✅',
    title: t('taskTitle'),
    text: t('taskText'),
    bg: 'bg-green-50',
  },
  {
    icon: '🖊️',
    title: t('noteTitle'),
    text: t('noteText'),
    bg: 'bg-blue-50',
  },
  {
    icon: '📊',
    title: t('graphTitle'),
    text: t('graphText'),
    bg: 'bg-orange-100',
  },
  {
    icon: '🎨',
    title: t('styleTitle'),
    text: t('styleText'),
    bg: 'bg-pink-100',
  },
  {
    icon: '🔄',
    title: t('syncTitle'),
    text: t('syncText'),
    bg: 'bg-purple-100',
  },
]
</script>