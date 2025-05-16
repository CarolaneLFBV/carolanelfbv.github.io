<script setup>
import UpcomingItem from "~/components/item/UpcomingItem.vue";

const features = [
  {
    title: '✨ Intégration avec IA',
    text: 'Pour vous permettre de naviguer, créer et organiser sans prise de tête',
  },
  {
    title: '✨ Liens et Fichiers',
    text: 'Pour regrouper tout au même endroit, dans le même projet',
  },
  {
    title: '✨ Notes vocales',
    text: 'Pas le temps d’écrire ? Voici un nouveau moyen de mettre vos idées sur papier',
  },
  {
    title: '✨ D’autres fonctionnalités à venir',
    text: 'Restez à l’affût des prochaines mises à jour pour profiter de toutes les fonctionnalités',
  },
]
</script>

<template>
  <section class="py-24 px-6">
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="flex justify-center">
        <NuxtImg src="./images/mockup-future.png" alt="Phone future features" class="max-w-[250px] md:max-w-sm" />
      </div>

      <div class="flex flex-col gap-8">
        <h3 class="text-xl font-bold">À venir sur votre application</h3>

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

