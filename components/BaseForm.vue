<script setup>
  import { ref } from 'vue';
  import BaseMBTI from './BaseMBTI.vue';
  import BaseEnneagram from './BaseEnneagram.vue';

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
  <form @submit.prevent="submitForm">
    <BaseMBTI v-model="mbti" />
    <BaseEnneagram v-model="enneagram" />
    <button type="submit"></button>
  </form>
</template>