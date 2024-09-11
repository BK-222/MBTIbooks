<script setup>
  import { ref } from 'vue';
  // import useUserInputStore from '@/stores/UserInput.js';

  const emit = defineEmits(['submit']);
  const mbti = ref('');
  const enneagram = ref('');
  // const store = useUserInputStore();

  const submitForm = async function() {
    if (!mbti.value || !enneagram.value) {
      alert('Please enter both MBTI and Enneagram');
      return;
    }
    emit('submit', { mbti: mbti.value, enneagram: enneagram.value });
    // await fetchFigures();
    // store.setMbti(store.mbti);
  }
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <MbtiInput v-model="mbti" />
    <EnneagramInput v-model="enneagram" />
    <BaseButton>Submit</BaseButton>
  </BaseForm>
</template>