<script setup lang="ts">
import AppAside from './components/AppAside.vue';
</script>

<template>
  <AppAside />
  <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg pt-2">
    <router-view />
  </main>
</template>

<style scoped></style>
