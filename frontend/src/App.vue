<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

const links = [
  { name: 'issues', label: 'Все задачи' },
  { name: 'boards', label: 'Доски' },
] as const;
</script>

<template>
  <div class="page">
    <header class="header">
      <nav class="links">
        <RouterLink
          v-for="link in links"
          :key="link.name"
          :to="{ name: link.name }"
          active-class="active-link"
          class="link"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="actions">
        <button class="button">Создать задачу</button>
      </div>
    </header>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-inline-size: 100%;
  min-block-size: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.links,
.actions {
  display: flex;
  gap: 1rem;
}

.link {
  color: #000;
  text-decoration: none;
}

.active-link {
  color: #40d500;
}

.link:hover {
  color: #0da805;
}

.button {
  padding-block: 0.5rem;
  padding-inline: 1rem;
  color: #fff;
  border: none;
  background-color: #000;
  cursor: pointer;
}

.button:hover {
  background-color: #000;
}
</style>
