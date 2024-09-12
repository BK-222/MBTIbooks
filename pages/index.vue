<script setup>
import { ref } from 'vue';
import useUserInputStore from '@/stores/UserInput.js';

const store = useUserInputStore();
const router = useRouter();
// const resultsLoaded = ref(false);

const fetchData = async function(type, setter) {
  try {
    const response = await $fetch(`/api/${type}?mbti=${store.mbti}&enneagram=${store.enneagram}`);
    setter(response);
  } catch (error) {
    console.error('Error fetching data', error.message);
  }
}

const fetchFigures = async function() {
  await fetchData('figures', store.setFigures);
}
const fetchBooks = async function() {
  await fetchData('books', store.setBooks);
}

const handleSubmit = async function(data) { 
  store.setMbti(data.mbti);
  store.setEnneagram(data.enneagram);
  await Promise.all([fetchFigures(), fetchBooks()]);
  router.push('/results');
  // resultsLoaded.value = true;
}

const resetResults = function() {
  store.setMbti('');
  store.setEnneagram('');
  // resultsLoaded.value = false;
}

// const fetchFigures = async function() {  // Fetch data from API
//   try {
//     const response = await $fetch(`/api/figures?mbti=${store.mbti}&enneagram=${store.enneagram}`);
//     store.setFigures(response);
//     // resultsLoaded.value = true;
//   } catch (error) {
//     console.error('Error fetching figures', error.message);
//   }
// }
</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <!-- <div v-if="!resultsLoaded"> -->
      <UserForm @submit="handleSubmit" />
    <!-- </div> -->
    <!-- <div v-else> -->

    <!-- </div> -->
  </div>
</template>