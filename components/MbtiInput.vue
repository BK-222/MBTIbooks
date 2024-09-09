<script setup>
  
  const props = defineProps({ modelValue: { type: String, required: true }});
  const emit = defineEmits(['update:modelValue']);
  const handleInput = (event) => {
    console.log('MBTI Input Changed:', event.target.value); // Debug: Track input change
    emit('update:modelValue', event.target.value); // Emitting the input value back to the parent component
  }
</script>

<template>
  <label for="mbti">MBTI</label>
  <input type="text" id="mbti" :value="modelValue" @input="handleInput" />
  <!-- <input type="text" id="mbti" v-model.trim="mbti" /> -->
</template>