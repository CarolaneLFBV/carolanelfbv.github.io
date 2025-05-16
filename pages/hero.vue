<script setup lang="ts">
import {useI18n} from "#imports";

const {t} = useI18n();
</script>

<template>
  <div class="relative z-10 flex flex-col items-center justify-center">
    <div class="flex flex-col items-center justify-center gap-2 pb-[10vh] pt-[20vh]">
      <nuxt-img
          src="~/public/images/icon.png"
          alt="Icon l'application Keepio"
          class="mx-auto w-20 opacity-0 animate-fade-in"
          style="animation-delay: 0.8s"
      />
      <h1 class="text-5xl md:text-6xl font-extrabold opacity-0 animate-slide-up" style="animation-delay: 0.2s">
        {{ t('app') }}
      </h1>
      <p class="text-lg text-center text-gray-600 opacity-0 animate-slide-up" style="animation-delay: 0.4s">
        {{ t('appSubtitle') }}
      </p>
      <a href="#" class="opacity-0 animate-fade-in" style="animation-delay: 0.6s"> {{ t('availableSoon') }}</a>
      <!-- <a href="#" class="opacity-0 animate-fade-in" style="animation-delay: 0.6s">
        <img src="/app-store-badge.svg" alt="Download on the App Store" class="h-30">
      </a> -->
    </div>

    <div>
      <NuxtImg
          src="~/public/images/mockup-keepio.png"
          alt="Capture de l'application Keepio"
          class="mx-auto max-w-[280px] md:max-w-[360px] opacity-0 animate-fade-in"
          style="animation-delay: 0.8s"
      />
    </div>
  </div>
</template>

<style scoped>

</style>