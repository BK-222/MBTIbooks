<script setup>
  import { ref } from 'vue';
  import useUserInputStore from '@/stores/UserInput.js';

  const store = useUserInputStore();
  const resultsLoaded = ref(false);

  // const figures = ref([]);
  // const mbti = ref(''); not needed when using store

  const fetchFigures = async function() {  // Fetch data from API
    try {
      const response = await $fetch(`/api/figures?mbti=${mbti.value}`);
      store.setFigures(response);
      resultsLoaded.value = true;
      // figures.value = response;
    } catch (error) {
      console.error('Error fetching figures', error.message);
    }
  }

  const handleSubmit = async function(value) { 
    store.setMbti(value);  // Store MBTI in Pinia
    await fetchFigures(); // Fetch data from API
  }
  // const handleSubmit = function(value) { // for getting value from UserForm instead of the store
  //   mbti.value = value;
  //   fetchFigures();
  // }

  // const fetchFigures = async function() {    
  //   try {
  //     const response = await $fetch(`/api/figures?mbti=${mbti.value}`);
  //     figures.value = response;
  //   } catch (error) {
  //     console.error('Error fetching figures', error.message);
  //   }
  // }
  // const handleSubmit = function(value) {
  //   mbti.value = value;
  //   fetchFigures();
  // }

</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <UserForm @submit="handleSubmit" />
    <div v-if="store.figures.length">
      <div v-for="figure in store.figures" :key="figure.name">
        <p>{{ figure.name }}</p>
      </div>
    </div>
  </div>
</template>