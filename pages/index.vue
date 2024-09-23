<script setup>
import { ref } from 'vue';
import useUserInputStore from '@/stores/UserInput.js';

const store = useUserInputStore();
const router = useRouter();
const isLoading = ref(false);

const fetchData = async function(type, setter) {
  try {
    const response = await $fetch(`/api/${type}?mbti=${store.mbti}&enneagram=${store.enneagram}`);
    setter(response);
  } catch (error) {
    alert('No results found as of yet!');
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
  isLoading.value = true;
  store.setMbti(data.mbti.toUpperCase());
  store.setEnneagram(data.enneagram);
  store.setBooks([]);
  store.setFigures([]);
  try {
    await Promise.all([fetchFigures(), fetchBooks()]);
    router.push('/results');
    isLoading.value = false;
  } catch (error) {
    console.error('Error fetching data', error.message);
  }
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
  <div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-col justify-center items-center bg-gray-200">
      <p class="my-4 text-4xl">Hello :)</p>
      <p class="mb-4 text-center text-lg">Feel free to type in your MBTI and Enneagram to get some book suggestions...</p>
      <UserForm v-if="!isLoading" @submit="handleSubmit" />
      <div v-else>
        <div class="flex flex-col items-center">
          <p class="mb-2">Fetching data...</p>
          <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-teal-500 border-t-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</template>