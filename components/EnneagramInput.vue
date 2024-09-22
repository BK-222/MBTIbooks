<script setup>
  const props = defineProps({ modelValue: { type: String, required: true }});
  const emit = defineEmits(['update:modelValue']);
  const handleInput = (event) => {
    emit('update:modelValue', event.target.value); // Emitting the input value back to the parent component
  }
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:space-x-1 ">
  <label class="text-base lg:text-sm lg:self-center lg:mx-1" for="enneagram">Enneagram</label>
  <input class="focus:outline-none p-2 border rounded w-full" placeholder="Enter your Enneagram" type="text" id="enneagram" :value="modelValue" @input="handleInput" />
  </div>
</template>