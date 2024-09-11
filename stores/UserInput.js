import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserInputStore = defineStore('userInput', () => {
  const mbti = ref(''); // stores the user's MBTI input
  const enneagram = ref(''); // stores the user's Enneagram input
  
  const figures = ref([]); // stores the fetched figures
  const books = ref([]); // stores the fetched books

  const setMbti = function(value) {
    mbti.value = value;
  }
  const setEnneagram = function(value) {
    enneagram.value = value;
  }
  const setFigures = function(data) {
    figures.value = data;
  }
  const setBooks = function(data) {
    books.value = data;
  }

  return { mbti, enneagram, figures, books, setMbti, setEnneagram, setFigures, setBooks };
});

export default useUserInputStore;