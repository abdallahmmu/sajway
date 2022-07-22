<script setup>
import spinnerVue from "../UI/spinner.vue";
import FilteredByCatigory from "../UI/filteredByCatigory.vue";
import ProductItem from "./productItem.vue";
import { Meals } from "../../store/meals";
import { computed, onMounted, reactive } from "vue";

// init the store
const storeMeals = Meals();

// define the data
const mealsList = reactive({
  currentView: "الكل",
  mealsLists: [],
});

// init the meals on mounted
onMounted(() => {
  storeMeals.getMeals();
});

// get all the meals
const data = computed(() => {
  return storeMeals.getAllMeals;
});
mealsList.mealsLists = data;

//filterd by catigory lentgh

const FilteredByCatigoryLength = reactive({
  all: mealsList.mealsLists,
  sandwitches: mealsList.mealsLists.filter(
    (meal) => meal.catigory === "ساندوتش"
  ),
  meals: mealsList.mealsLists.filter((meal) => meal.catigory === "وجبة"),
});

// filter the meals from the front end
const Filtered = computed(() => {
  if (mealsList.currentView === "ساندوتش") {
    return mealsList.mealsLists.filter((meal) => meal.catigory === "ساندوتش");
  } else if (mealsList.currentView === "وجبة") {
    return mealsList.mealsLists.filter((meal) => meal.catigory === "وجبة");
  } else {
    return mealsList.mealsLists;
  }
});

const FilterCatigory = (view) => {
  mealsList.currentView = view;
};
</script>

<template>
  <spinnerVue v-if="storeMeals.isLoading" />
  <div class="container px-5 py-16 mx-auto md:h-full">
    <!-- Filtered BY CATIGORY-->
    <FilteredByCatigory @setView="FilterCatigory" />
    <!-- Product ITEM
    -->
    
    <ProductItem :meals="Filtered" />
  </div>
</template>

<style></style>
