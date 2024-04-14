<template>
  <div class="bg-gray-100 h-full">
    <Navbar />
    <main class="h-full">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style lang="scss" scoped></style>
