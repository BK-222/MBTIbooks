<template>
  <div class="flex flex-col bg-gray-200 min-h-screen">
    <header>
    </header>
    <main class="flex-grow">
      <slot></slot>
    </main>
    <footer class="bg-gray-300 p-4 mt-auto">
      <p>*currently works only with the following types: INFP, ENFP, INTP, ENTP.</p>
      <p>&copy; 2024 Personality App</p>
    </footer>
  </div>
</template>