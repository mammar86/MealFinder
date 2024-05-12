<template>
  <div class="flex flex-col py-10 px-20 h-100">
    <div class="flex gap-5 justify-center my-5">
      <router-link v-for="letter of letters" :to="{ name: 'byLetter', params: { letter } }" :key="letter">
        <strong>{{ letter }} </strong>
      </router-link>
    </div>
    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
      <MealCard
        v-for="meal in appStore.mealByFirstLetter"
        :key="meal.idMeal"
        :title="meal.strMeal"
        :image="meal.strMealThumb"
        :youtube="meal.strYoutube"
        :id="meal.idMeal"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '../store/store.js';
import { fetchMealsByFirstLetter } from '../dataClient.js';
import { fetchMealCategories } from '../dataClient.js';
import MealCard from '../components/MealCard.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const appStore = useAppStore();
const route = useRoute();
const fetchedMeals = ref([]);

watch(
  () => route.params.letter,
  async (newLetter) => {
    console.log(newLetter);
    //  fetchedMeals.value = await fetchMealsByFirstLetter(newLetter)
    //   console.log('fetchedMealsFromClient', fetchedMeals.value);
    await appStore.getMealsByFirstLetter(newLetter);
    console.log('fetchedMeals', appStore.mealByFirstLetter);
  }
);

const getLetter = computed(() => {
  return route.params.letter;
});

// onMounted(async () => {
//  fetchedMeals.value = await fetchMealCategories()
//  console.log('allMeals', fetchedMeals.value);

// })
</script>

<style lang="scss" scoped></style>
