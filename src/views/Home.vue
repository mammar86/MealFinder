<template>

</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useAppStore } from '../store/store.js';
import {fetchMealCategories} from '../dataClient.js' 

const appStore = useAppStore();
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

onMounted(async () => {
  const mealsCategories =  await fetchMealCategories();
  appStore.mealsCategories = mealsCategories;

});
</script>
