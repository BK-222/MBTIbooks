import useUserInputStore from '../stores/UserInput.js';

const validateAccess = defineNuxtRouteMiddleware((to, from) => {
  const store = useUserInputStore();  // Access the Pinia store
  
  // Redirect if no data is available
  if (!store.figures.length && !store.books.length) {
    return navigateTo('/');  // Redirect to home if no data
  }
});

export default validateAccess;