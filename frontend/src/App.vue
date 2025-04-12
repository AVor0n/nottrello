<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-block-size: 100vh;
  line-height: 1.5;
}

.logo {
  display: block;
  margin-block: 0 2rem;
  margin-inline: auto;
}

nav {
  inline-size: 100%;
  margin-block-start: 2rem;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding-block: 0;
  padding-inline: 1rem;
  border-inline-start: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-inline-end: calc(var(--section-gap) / 2);
  }

  .logo {
    margin-block: 0;
    margin-inline: 0 2rem;
  }

  header .wrapper {
    display: flex;
    flex-wrap: wrap;
    place-items: flex-start;
  }

  nav {
    margin-block-start: 1rem;
    margin-inline-start: -1rem;
    padding-block: 1rem;
    padding-inline: 0;
    font-size: 1rem;
    text-align: start;
  }
}
</style>
