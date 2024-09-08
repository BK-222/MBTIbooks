<script setup>
  import { ref } from 'vue';

  const mbti = ref('');
  const enneagram = ref('');

  const figures = ref([]);

  const fetchFigures = async () => {
    try {
      const response = await $fetch(`/api/figures?mbti=${mbti.value}`);
      figures.value = response;
    } catch (error) {
      console.error('Error fetching figures', error.message);
    }
  } 

  const submitForm = async function() {
    if (!mbti.value) {
      alert('Please enter both MBTI and Enneagram');
      return;   //   alert('Please select both MBTI and Enneagram');
    }
    await fetchFigures();
  }
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <MbtiInput v-model="mbti" />
    <!-- <EnneagramInput v-model="enneagram" /> -->
    <BaseButton>Submit</BaseButton>
  </BaseForm>

  <div v-if="figures.length">
    <div v-for="figure in figures" :key="figure.name">
      <p>{{ figure.name }}</p>
    </div>
  </div>
</template>