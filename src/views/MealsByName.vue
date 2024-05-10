<template>
  <div class="flex flex-col p-8 h-100">
    <div class="flex justify-center p-6">
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-5/6"
        placeholder="Find a Meal"
        v-model="inputString"
        @change="getMealsByName"
      />
    </div>

    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8">
      <MealCard
        v-for="meal in appStore.mealsByName"
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
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchMealsByName } from '../dataClient.js';
import { useAppStore } from '../store/store.js';
import MealDetails from './MealDetails.vue';
import MealCard from '../components/MealCard.vue';

const inputString = ref('');
const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const getMealsByName = async () => {
  const value = inputString.value;
  await appStore.getMealsByName(value);
  router.push({ path: `/by-name/${value}` });
  console.log(appStore.mealsByName);
};

onMounted(() => {
  //we can also type the name of the meal in the url
  inputString.value = route.params.name;
  inputString.value && getMealsByName();
});
</script>

<style lang="scss" scoped>
input {
  &:focus {
    // border-color: green;
    // outline: orange;
    --tw-ring-color: green;
    border-color: green;
  }
}
</style>
