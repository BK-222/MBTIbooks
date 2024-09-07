<script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({ modelValue: { type: String, required: true }});
  const emit = defineEmits(['update:modelValue']);
  const handleInput = (event) => {
    emit('update:modelValue', event.target.value); // Emitting the input value back to the parent component
  }
</script>

<template>
  <label for="mbti">MBTI</label>
  <input type="text" id="mbti" :value="modelValue" @input="handleInput" />
  <!-- <input type="text" id="mbti" v-model.trim="mbti" /> -->
</template>