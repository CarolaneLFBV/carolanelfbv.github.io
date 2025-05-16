<script setup lang="ts">
import { useI18n } from '#imports';
import BackgroundView from '~/components/app/BackgroundView.vue';
import Footer from '~/components/app/Footer.vue';
const { t } = useI18n();
</script>   

<template>
    <section class="relative scroll-smooth">
      <nav class="fixed top-0 z-20 left-0 w-full bg-white/30 backdrop-blur-md shadow-md p-4 flex items-center justify-between px-6">
        <div class="flex items-center gap-4">
          <router-link to="/" class="text-gray-600 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </router-link>
          <router-link to="/" class="text-xl font-bold text-gray-900">{{ t("app") }}</router-link>
        </div>
      </nav>

      <BackgroundView class="fixed top-0 left-0 w-full h-full z-[-1]"/>

      <div class="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 class="text-3xl font-bold mb-8">{{ t("gcuTitle") }}</h1>
        
        <div class="space-y-12 text-gray-800">
          <div class="text-sm text-gray-500 mb-8">
            {{ t("gcuSection.lastUpdated") }}
          </div>

          <p class="text-gray-600">
            {{ t("gcuSection.thankYou") }}
          </p>

          <section>
            <h2 class="text-xl font-semibold mb-4">{{ t("gcuSection.dataCollectedTitle") }}</h2>
            <p class="text-gray-600 mb-4">
                {{ t("gcuSection.dataCollected") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li> {{ t("gcuSection.dataCollectionList.0") }}</li>
              <li> {{ t("gcuSection.dataCollectionList.1") }}</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">{{ t("gcuSection.storageTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.storageText") }}
            </p>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">{{ t("gcuSection.rightsTitle") }}</h2>
            <p class="text-gray-600 mb-4">
              {{ t("gcuSection.rightsText") }}
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-600">
              <li>{{ t("gcuSection.rightsList.0") }}</li>
              <li>{{ t("gcuSection.rightsList.1") }}</li>
            </ul>
          </section>

          <section>
            <h2 class="text-xl font-semibold mb-4">{{ t("gcuSection.contactTitle") }}</h2>
            <p class="text-gray-600">
              {{ t("gcuSection.contactText") }}
            </p>
          </section>
        </div>
      </div>
    </section>

    <Footer/>
</template>