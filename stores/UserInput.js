import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

const useUserInputStore = defineStore('userInput', () => {
  const mbti = ref(''); // stores the user's MBTI input
  const enneagram = ref(''); // stores the user's Enneagram input
  
  const figures = ref([]); // stores the fetched figures
  // const bookRecommendations = ref([]);

  const setMbti = function(value) {
    mbti.value = value;
  }
  const setFigures = function(data) {
    figures.value = data;
  }

  // const setEnneagram = function(value) {
  //   enneagram.value = value;
  // }

  const fetchResults = async function() {
    
  }
  return { mbti, figures, setMbti, setFigures, fetchResults };
});

export default useUserInputStore;