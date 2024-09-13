<script setup>
import useUserInputStore from '@/stores/UserInput.js';

const store = useUserInputStore();
const router = useRouter();

definePageMeta({ middleware: 'auth' });

</script>

<template>
  <div class="flex flex-row justify-center gap-6 my-8" v-if="store.figures.length">
    <div v-for="figure in store.figures" :key="figure.name">
      <img class="h-64 w-48 object-cover" :src="`/img/figures/${figure.image}`" :alt="`image of ${figure.name}`">
      <p>{{ figure.name }}</p>
    </div>
  </div>
  <div v-if="store.books.length">
    <div v-for="book in store.books" :key="book.title">
      <p>{{ book.title }}</p>
    </div>
  </div>
  <div>
    <BaseButton @click="router.push('/')">go back</BaseButton>
  </div>
</template>