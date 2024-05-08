<template>
  <div class="flex flex-col w-full items-center my-20 gap-7 px-20">
    <div class="flex justify-center border-2 w-3/4 border-green-600 rounded p-4">
      <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-1/3" />
      <div class="flex flex-col w-1/2 items-center m-5 justify-between">
        <h1 class="text-3xl font-bold">{{ meal.strMeal }}</h1>
        <p><strong>Category:</strong> {{ meal.strCategory }}</p>
        <p><strong>Area:</strong> {{ meal.strArea }}</p>
        <div class="flex w-full justify-around">
          <a :href="meal.strYoutube" target="_blank" v-if="meal.strYoutube">
            <font-awesome-icon icon="fa-brands fa-youtube" color="#FF0000" size="xl" title="Recipe video" />
          </a>
          <a :href="meal.strSource" target="_blank" v-if="meal.strSource">
            <font-awesome-icon icon="fa-solid fa-link" color="#0000FF" size="xl" title="Recipe source" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-full gap-3">
      <h2 class="text-2xl font-bold">Ingredients</h2>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">
          <strong>{{ ingredient.name }} </strong> - {{ ingredient.measure }}
        </li>
      </ul>
    </div>
    <div class="flex flex-col w-full gap-3">
      <h2 class="text-2xl font-bold">Instructions</h2>

      <div>{{ meal.strInstructions }}</div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { fetchMealsByName } from '../dataClient.js';
import { getMealDetailsById } from '../dataClient.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const meal = ref({});
const route = useRoute();

const ingredients = computed(() => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal.value[`strIngredient${i}`];
    const measure = meal.value[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push({ name: ingredient, measure });
    }
  }
  return ingredients;
});


onMounted(async () => {
  const id = route.params.id;
  console.log(id);
  const mealResponse = await getMealDetailsById(id);
  meal.value = mealResponse[0];
  console.log('meal.value', meal.value);
  console.log('meal', meal);
});
</script>

<style>
ul {
  list-style-type: square;
}
ul li {
  list-style-position: inside;
}
</style>
