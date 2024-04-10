<template>
  <div class="flex gap-3 justify-center mt-3">
    <router-link v-for="letter of letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter">
    {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
</script>

<style lang="scss" scoped></style>
