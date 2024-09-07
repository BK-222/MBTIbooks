<script setup>
  import { ref } from 'vue';
  import BaseForm from '@/components/BaseForm.vue';

  const resultsLoaded = ref(false);
</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <BaseForm class="p-12 bg-gray-300" />
  </div>
</template>