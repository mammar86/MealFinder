<template>
  <div>
    <header class="bg-white shadow h-16 flex justify-between">
      <router-link :to="{ name: 'home' }" class="flex items-center px-5 h-full"> Home </router-link>
      <div class="flex items-center gap-1">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center px-2 hover:bg-blue-100 transition-colors h-full"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center px-2 hover:bg-blue-100 transition-colors h-full"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-flex items-center px-2 hover:bg-blue-100 transition-colors h-full"
        >
          Meals By Ingredients
        </router-link>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
