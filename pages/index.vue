<script setup>
  import { ref } from 'vue';
  import useUserInputStore from '@/stores/UserInput.js';

  const store = useUserInputStore();
  const resultsLoaded = ref(false);
</script>

<template>
  <div class="flex justify-center items-center bg-gray-200 min-h-screen">
    <UserForm />
  </div>
</template>