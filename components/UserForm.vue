<script setup>
  import { ref } from 'vue';
  import useUserInputStore from '@/stores/UserInput.js';

  const mbti = ref('');
  const emit = defineEmits(['submit']);
  // const enneagram = ref('');
  const store = useUserInputStore();

  const submitForm = async function() {
    if (!mbti.value) {
      alert('Please enter both MBTI and Enneagram');
      return;   //   alert('Please select both MBTI and Enneagram');
    }
    // await fetchFigures();
    // emit('submit', mbti.value);
    // store.setMbti(store.mbti);
    emit('submit', mbti.value);
  }
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <MbtiInput v-model="mbti" />
    <!-- <EnneagramInput v-model="enneagram" /> -->
    <BaseButton>Submit</BaseButton>
  </BaseForm>
</template>