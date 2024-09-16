<script setup>
import useUserInputStore from '@/stores/UserInput.js';

const store = useUserInputStore();
const router = useRouter();

definePageMeta({ middleware: 'auth' });

</script>

<template>
  <div class="flex flex-row justify-center gap-6 my-8" v-if="store.figures.length">
    <div v-for="figure in store.figures" :key="figure.name">
      <img class="h-80 w-60 object-cover rounded-sm" :src="`/img/figures/${figure.image}`" :alt="`image of ${figure.name}`">
      <p>{{ figure.name }}</p>
    </div>
  </div>
  <div class="flex flex-col items-center" v-if="store.books.length">
      <div v-for="book in store.books" :key="book.title">
        <p>{{ book.title }}</p>
        <a :href="book.link" target="_blank">{{ book.link }}</a>
      </div>
    <!-- <div v-for="book in store.books" :key="book.title"> -->
    <!-- <div v-for="(books, genre) in store.books" :key="genre">
      {{ genre }}: -->
    <!-- </div> -->
  </div>     
  <div class="flex justify-center">
    <BaseButton class="px-6 py-2" @click="router.push('/')">go back</BaseButton>
  </div>
</template>