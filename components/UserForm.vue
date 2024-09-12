<script setup>
import { ref } from 'vue';

const emit = defineEmits(['submit']);
const mbti = ref('');
const enneagram = ref('');

const submitForm = async function() {
  if (!mbti.value || !enneagram.value) {
    alert('Please enter both MBTI and Enneagram');
    return;
  }
  emit('submit', { mbti: mbti.value, enneagram: enneagram.value });
}
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <MbtiInput v-model="mbti" />
    <EnneagramInput v-model="enneagram" />
    <BaseButton>Submit</BaseButton>
  </BaseForm>
</template>