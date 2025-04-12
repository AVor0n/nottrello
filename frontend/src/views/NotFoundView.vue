<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>404 - Страница не найдена</h1>
    <RouterLink :to="{name: 'board'}">На главную</RouterLink>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  block-size: 100vh;
}
</style>
