<script setup>
import HomePage from './components/HomePage.vue'
</script>

<template>
  <main>
    <HomePage />
  </main>
</template>

<style lang="scss">
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
</style>