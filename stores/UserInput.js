import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useUserInputStore = defineStore('userInput', () => {
  const mbti = ref('');
  const historicFigures = ref([]);
  // const enneagram = ref('');
  // const bookRecommendations = ref([]);

  const setMBTI = function(value) {
    mbti.value = value;
  }

  const setHistoricFigures = (data) => {
    historicFigures.value = data;
  }

  // const setEnneagram = function(value) {
  //   enneagram.value = value;
  // }

  const fetchResults = async function() {
    
  }
  return { mbti, historicFigures, setMBTI, fetchResults };
});

export default useUserInputStore;