<script setup>
  import { ref } from 'vue';
  import BaseForm from '@/components/BaseForm.vue';

  const resultsLoaded = ref(false);
</script>

<template>
  <div class="bg-gray-200">
    Hello, User.
    <BaseForm class="flex justify-center items-center min-h-screen" />
    <div v-if="resultsLoaded">
    
    </div>
  </div>
</template>