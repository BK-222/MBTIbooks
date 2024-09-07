<script setup>
  import { ref } from 'vue';

  const mbti = ref('');
  const enneagram = ref('');

  const submitForm = async function() {
    if (!mbti.value && enneagram.value) {
      alert('Please enter both MBTI and Enneagram');
      return;
    // } else {
    //   alert('Please select both MBTI and Enneagram');
    }
  }
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <MbtiInput v-model="mbti" />
    <EnneagramInput v-model="enneagram" />
    <BaseButton />
  </BaseForm>
</template>