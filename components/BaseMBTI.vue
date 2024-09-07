<script>
  import { ref } from 'vue';
  const mbti = ref('');
</script>

<template>
  <label for="mbti">MBTI</label>
  <input type="text" id="mbti" v-model.trim="mbti" />
</template>