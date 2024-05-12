import { defineStore } from 'pinia';
import {fetchMealsByName, fetchMealsByFirstLetter} from '../dataClient';

export const useAppStore = defineStore('app', {
  state: () => ({ 
    //count: 0,
    mealsByName: [],
    mealByFirstLetter: [],
    }),
  getters: {
    //doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    async getMealsByName(input) {
      const mealsList = await fetchMealsByName(input);
      this.mealsByName = mealsList;
    },
    async getMealsByFirstLetter(letter) {
      const mealsList = await fetchMealsByFirstLetter(letter);
      this.mealByFirstLetter = mealsList;
    },

  
  },
});
