<template>
  <div class="bg-white shadow rounded-xl">
    <img :src="image" :alt="title" class="rounded-t-xl w-full h-64 object-cover" />
    <div class="p-2">
      <h3 class="font-semibold py-1">{{ title }}</h3>
      <div class="flex item-center justify-between py-2">
        <a
          :href="youtube"
          target="_blank"
          class="p-3 rounded border-2 border-red-700 hover:bg-red-600 hover:text-white transition-colors"
          >Youtube</a
        >
        <router-link
          :to="{ name: 'mealDetails', params: { id: id} }"
          class="p-3 rounded border-2 border-green-700 hover:bg-green-600 hover:text-white transition-colors"
        >
          Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    image: String,
    title: String,
    youtube: String,
    id: String,
})

</script>
