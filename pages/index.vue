<script setup>
  import { ref } from 'vue';
  import useUserInputStore from '@/stores/UserInput.js';

  // const store = useUserInputStore();
  // const resultsLoaded = ref(false);
  const figures = ref([]);
  const mbti = ref('');

  const fetchFigures = async function() {    
    try {
      const response = await $fetch(`/api/figures?mbti=${mbti.value}`);
      figures.value = response;
    } catch (error) {
      console.error('Error fetching figures', error.message);
    }
  }
  const handleSubmit = function(value) {
    mbti.value = value;
    fetchFigures();
  }

</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <UserForm @submit="handleSubmit" />
    <div v-if="figures.length">
    <div v-for="figure in figures" :key="figure.name">
      <p>{{ figure.name }}</p>
    </div>
  </div>
  </div>
</template>