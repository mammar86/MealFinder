<template>
  <div class="flex flex-col p-8 h-100">
    <div>
      <input
        type="text"
        class="rounded border-2 border-grey-200 w-full"
        placeholder="Find a Meal"
        v-model="inputString"
        @change="getMealsByName"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      <div v-for="meal in appStore.mealsByName" :key="meal.id" class="bg-white shadow rounded-xl">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-80 object-cover" />
        <div class="p-2">
          <h3 class="font-semibold py-1">{{ meal.strMeal }}</h3>
          <p class="py-2">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>
          <div class="flex item-center justify-between py-2">
            <a
              :href="meal.strYoutube"
              target="_blank"
              class="p-3 rounded border-2 border-red-700 hover:bg-red-600 hover:text-white transition-colors"
              >Youtube Link</a
            >
            <router-link
              :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
              class="p-3 rounded border-2 border-green-700 hover:bg-green-600 hover:text-white transition-colors"
            >
              Details
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchMealsByName } from '../dataClient.js';
import { useAppStore } from '../store/store.js';
import MealDetails from './MealDetails.vue';

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

<style lang="scss" scoped></style>
