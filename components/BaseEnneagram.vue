<script>
  import { ref } from 'vue';
  const enneagran = ref('');
</script>

<template>
  <label for="enneagram">Enneagram</label>
  <input type="text" id="enneagram" v-model.trim="enneagram" />
</template>