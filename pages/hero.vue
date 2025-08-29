<script setup lang="ts">
import {useI18n} from "#imports";

const {t} = useI18n();
</script>

<template>
  <div class="relative z-10 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-2 pb-[10vh] pt-[20vh]">
      <nuxt-img
          src="/icon.png"
          alt="Icon l'application Keepio"
          class="mx-auto w-20 rounded-lg opacity-0 animate-fade-in"
          style="animation-delay: 0.8s"
      />
      <div class="flex flex-col text-center pt-10">
        <h1 class="text-5xl md:text-6xl font-extrabold opacity-0 animate-slide-up" style="animation-delay: 0.2s">
          {{ t('app') }}
        </h1>
        <p class="text-lg text-gray-600 pt-5 opacity-0 animate-slide-up" style="animation-delay: 0.4s">
          {{ t('appSubtitle') }}
        </p>
      </div>
      <a href="https://apps.apple.com/fr/app/keepio/id6746096493?l=en-GB" class="opacity-0 animate-fade-in" style="animation-delay: 0.6s">
        <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-50">
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>