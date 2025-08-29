<script setup lang="ts">
import { useI18n } from '#imports';

const { t } = useI18n();
</script>

<template>
  <footer class="mt-20 py-8 px-6 border-t border-gray-200">
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-4 text-sm text-gray-600">
      <div class="text-center">
        <div class="mb-4">
          {{ new Date().getFullYear() }} Okorp. {{ t('rights') }}
        </div>
        <div class="flex items-center justify-center gap-6">
          Carolane Lefebvre - 2025
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>