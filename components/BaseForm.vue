<script setup>
  import { ref } from 'vue';
  import BaseMBTI from './InputMBTI.vue';
  import BaseEnneagram from './InputEnneagram.vue';
  import BaseButton from './BaseButton.vue';

  const mbti = ref('');
  const enneagram = ref('');

  const submitForm = async function() {
    if (mbti.value && enneagram.value) {

    } else {
      alert('Please select both MBTI and Enneagram');
    }
  }
</script>

<template>  
  <form @submit.prevent="submitForm" class="w-full px-4 py-2 bg-gray-800 text-gray-200 border
  border-gray-600 rounded-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition">
    <BaseMBTI v-model="mbti" />
    <BaseEnneagram v-model="enneagram" />
    <BaseButton />
  </form>
</template>