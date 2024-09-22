<script setup>
import useUserInputStore from '@/stores/UserInput.js';
import { computed } from 'vue';

const store = useUserInputStore();
const router = useRouter();

definePageMeta({ middleware: 'auth' });

const userData = computed(() => {
  return `Type ${store.enneagram} ${store.mbti}`;
});

</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-row justify-center gap-6 my-4" v-if="store.figures.length">
      <div v-for="figure in store.figures" :key="figure.name">
        <NuxtImg class="h-80 w-60 object-cover rounded-sm" :src="`/img/figures/${figure.image}`" :alt="`image of ${figure.name}`" loading="lazy"/>
        <p class="text-center font-semibold">{{ figure.name }}</p>
      </div>
    </div>
    <div class="flex justify-center text-xl font-semibold">
      {{ userData }}
    </div>
    <div class="flex flex-col items-center" v-if="store.books.length">
      <BaseCard class="my-3.5" v-for="book in store.books" :key="book.title">
        <p class="mb-0.5 text-xl semibold">{{ book.title }}</p>
        <p class="mb-0.5 text-gray-400">Genre: {{ book.genre }}</p>
        <a :href="book.link" target="_blank">{{ book.link }}</a>
      </BaseCard>
    </div>     
    <div class="flex justify-center">
      <BaseButton class="px-6 py-2 font-semibold" @click="router.push('/')">go back</BaseButton>
    </div>
  </div>
</template>

<!-- <div v-for="book in store.books" :key="book.title"> -->
    <!-- <div v-for="(books, genre) in store.books" :key="genre">
      {{ genre }}: -->
    <!-- </div> -->