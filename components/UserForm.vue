<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['submit']);
const mbti = ref('');
const enneagram = ref('');
// const mbtiError = ref('');
// const enneagramError = ref('');

const mbtiRegex = /^[IEie][SNsn][TFtf][JPjp]$/;
const enneagramRegex = /^\d+$/;

const submitForm = async function() {

  if (!mbti.value || !enneagram.value) {
    alert('Please enter both MBTI and Enneagram');
    return;
  }
  if (!mbtiRegex.test(mbti.value)) {
    alert('Please enter a valid MBTI.');
    // mbtiError.value = 'Please enter a valid MBTI.';
    return;
  }
  if (!enneagramRegex.test(enneagram.value)) {
    alert('Please enter a valid whole Enneagram number.');
    // enneagramError.value = 'Please enter a valid whole Enneagram number.';
    return;
  }
  emit('submit', { mbti: mbti.value, enneagram: enneagram.value });

}
// watch([mbti, enneagram], () => { mbtiError.value = ''; enneagramError.value = ''; });
</script>

<template>  
  <BaseForm @submit.prevent="submitForm">
    <!-- <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-1 w-full"> -->
      <MbtiInput v-model="mbti" />
      <!-- <p v-if="mbtiError" class="text-gray-900">{{ mbtiError }}</p> -->
      <EnneagramInput v-model="enneagram" />
      <!-- <p v-if="enneagramError" class="text-gray-900">{{ enneagramError }}</p> -->
      <BaseButton class="self-center mt-1.5 lg:mt-0">Submit</BaseButton>
    <!-- </div> -->
  </BaseForm>
</template>