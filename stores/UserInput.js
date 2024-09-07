import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useUserInputStore = defineStore('userInput', () => {
  const mbti = ref('');
  const enneagram = ref('');
  const historicFigures = ref([]);
  const bookRecommendations = ref([]);

  const setMBTI = function(value) {
    mbti.value = value;
  }
  const setEnneagram = function(value) {
    enneagram.value = value;
  }

  const fetchResults = async function() {
    
  }
  return { mbti, enneagram, historicFigures, bookRecommendations, setMBTI, setEnneagram };
});

export default useUserInputStore;