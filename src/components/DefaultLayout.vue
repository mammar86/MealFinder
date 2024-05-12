<template>
  <div class="h-full">
    <main class="">
      <Navbar />
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style lang="scss" scoped>
main{
  background-image: url('src/assets/premium_vector-1682306950372-72eb3e1031fd.avif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.7); /* Specify the background color with reduced opacity */
  background-blend-mode: overlay; /* Blend the background image with the background color */
  height: inherit;
}


</style>
