<script setup>
import { ref, watch } from 'vue';

// const mbtiOptions = ['ENTP', 'INTP', 'ENFP', 'INFP'];

const props = defineProps({ modelValue: { type: String, required: true }});
const emit = defineEmits(['update:modelValue']);

const inputRef = ref(null);

const handleInput = (event) => {
  emit('update:modelValue', event.target.value); // Emitting the input value back to the parent component
}

onMounted(() => { if (inputRef.value) { inputRef.value.focus() } }); // active caret

// const search = ref(props.modelValue);
// const filteredOptions = ref([...mbtiOptions]);

// const selectOption = (option) => {
//   search.value = option;  // Set selected value
//   emit('update:modelValue', option);  // Emit the selected option
//   filteredOptions.value = [];  // Clear dropdown after selection
// }

// watch(search, (newVal) => {
//   filteredOptions.value = mbtiOptions.filter(option =>
//     option.toLowerCase().startsWith(newVal.toLowerCase())  // Narrow down options based on input
//   );
// });
</script>

<template>
  <label for="mbti">MBTI</label>
  <input class="focus:outline-none" ref="inputRef" type="text" id="mbti" :value="modelValue" @input="handleInput" />

  <!-- <ul v-if="filteredOptions.length" class="dropdown">
    <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">
      {{ option }}
    </li>
  </ul> -->
</template>

<!-- <style scoped>
.input {
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
}
.dropdown {
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: auto;
}
.dropdown-item:hover {
  background-color: #f0f0f0;
  cursor: pointer;
}
</style> -->