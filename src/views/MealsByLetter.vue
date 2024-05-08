<template>
  <div class="flex gap-3 justify-center mt-3">
    <router-link v-for="letter of letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter">
    {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
import { onMounted, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchMealsByFirstLetter } from '../dataClient.js';
import { fetchAllMeal } from '../dataClient.js';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const route = useRoute();
const fetchedMeals = ref([]);

watch(() => route.params.letter, async (newLetter) => {
  console.log(newLetter);
  fetchedMeals.value = await fetchMealsByFirstLetter(newLetter);
})


const getLetter = computed(()=> {
  return route.params.letter
})  

onMounted(async () => {
 fetchedMeals.value = await fetchAllMeal()
 console.log('allMeals', fetchedMeals.value);

})
</script>

<style lang="scss" scoped></style>
