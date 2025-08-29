<script setup lang="ts">
import Features from "~/pages/features.vue";
import Hero from "~/pages/hero.vue";
import Upcoming from "~/pages/upcoming.vue";
import Contact from "~/pages/contact.vue";
import BackgroundView from "~/components/app/BackgroundView.vue";
import Footer from "~/components/app/Footer.vue";

import { useI18n } from "#imports";
import { ref, onMounted, onUnmounted } from 'vue';

const { t } = useI18n();
const showScrollTop = ref(false);

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 500;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="relative scroll-smooth">
    
    <nav class="fixed top-0 z-20 left-0 w-full bg-white/30 backdrop-blur-md shadow-md p-4 flex justify-center gap-6">
    <a class="nav-link" href="#features">{{ t("features") }}</a>
    <a class="nav-link" href="#contact">{{ t("contact") }}</a>
    <a class="nav-link" href="/terms">{{ t("gcu") }}</a>
    <a class="nav-link" href="/privacy">{{ t("privacy") }}</a>
  </nav>

    <BackgroundView class="fixed top-0 left-0 w-full h-full z-[-1]"/>

    <div class="relative z-10">
      <div class="flex flex-col gap-10 justify-between">        
        <Hero/>
        
        <div id="features">
          <Features/>
        </div>
        
        <div id="contact">
          <Contact/>
        </div>
      </div>
    </div>

    <Footer/>

    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-white/80 hover:bg-white/90 text-gray-700 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Scroll to top"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </section>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}

.nav-link {
  position: relative;
  color: #4a5568;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2d3748;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: currentColor;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}
</style>