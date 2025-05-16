<script setup lang="ts">
import { useI18n } from "#imports";
const { t } = useI18n();

function onSubmit(event: Event) {
  const form = event.target as HTMLFormElement;
  setTimeout(() => {
    form.reset();
  }, 100);
}
</script>

<template>
  <section class="py-24 px-4">
    <div class="max-w-xl mx-auto backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-lg border border-white/20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent -z-10"></div>
      <h2 class="text-2xl font-bold text-center mb-2">{{ $t('form.title') }}</h2>
      <p class="text-center mb-8 text-gray-500">{{ $t('form.subtitle') }}</p>

      <form
        action="https://formspree.io/f/xeognayr"
        method="POST"
        @submit="onSubmit"
        class="space-y-4"
      >
        <input
          type="text"
          name="name"
          :placeholder="$t('form.name')"
          required
          class="w-full rounded-lg px-4 py-3 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring focus:ring-black/20 border border-white/60 shadow-sm transition-all duration-200 focus:bg-white text-gray-800 placeholder-gray-500"
        />
        <input
          type="email"
          name="email"
          :placeholder="$t('form.email')"
          required
          class="w-full rounded-lg px-4 py-3 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring focus:ring-black/20 border border-white/60 shadow-sm transition-all duration-200 focus:bg-white text-gray-800 placeholder-gray-500"
        />
        <input
          type="text"
          name="subject"
          :placeholder="$t('form.subject')"
          required
          class="w-full rounded-lg px-4 py-3 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring focus:ring-black/20 border border-white/60 shadow-sm transition-all duration-200 focus:bg-white text-gray-800 placeholder-gray-500"
        />
        <textarea
          name="message"
          :placeholder="$t('form.message')"
          required
          class="w-full rounded-lg px-4 py-3 bg-white/90 backdrop-blur-sm h-40 resize-none focus:outline-none focus:ring focus:ring-black/20 border border-white/60 shadow-sm transition-all duration-200 focus:bg-white text-gray-800 placeholder-gray-500"
        />

        <div class="flex justify-end gap-4 mt-6">
          <button
            type="reset"
            class="px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-lg hover:bg-black transition-all duration-200 cursor-pointer"
          >
            {{ $t('form.clear') }}
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-lg hover:bg-black transition-all duration-200 cursor-pointer"
          >
            {{ $t('form.send') }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>