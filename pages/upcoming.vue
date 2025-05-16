<script setup>
import UpcomingItem from "~/components/item/UpcomingItem.vue";
const { t } = useI18n();

const features = [
  {
    title: t('futureFeatures.aiIntegration'),
    text: t('futureFeatures.aiIntegrationText'),
  },
  {
    title: t('futureFeatures.linksAndFiles'),
    text: t('futureFeatures.linksAndFilesText'),
  },
  {
    title: t('futureFeatures.voiceNotes'),
    text: t('futureFeatures.voiceNotesText'),
  },
  {
    title: t('futureFeatures.otherFeatures'),
    text: t('futureFeatures.otherFeaturesText'),
  },
]
</script>

<template>
  <section class="py-24 px-6">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center">
        <NuxtImg src="mockup-future.png" alt="Phone future features" class="max-w-[250px] md:max-w-sm" />
      </div>

      <div class="flex flex-col gap-8">
        <h3 class="text-xl font-bold">{{ t('futureFeatures.title') }}</h3>

        <UpcomingItem
            v-for="(item, i) in features"
            :key="i"
            :title="item.title"
            :text="item.text"
            :delay="i * 100"
        />
      </div>
    </div>
  </section>
</template>

