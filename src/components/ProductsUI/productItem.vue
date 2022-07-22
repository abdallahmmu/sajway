<script setup>
import { Meals } from "../../store/meals";
import { useRoute } from "vue-router";
const storeMeals = Meals();
const route = useRoute();

const props = defineProps({
  meals: {
    type: Array,
    required: true,
  },
  deleteMe: { type: Boolean, default: false },

  editMe: { type: Boolean, default: false },
});
</script>

<template>
  <div class="flex flex-col md:flex-row flex-wrap mt-2">
    <div
      :class="`lg:w-1/4 md:w-1/2 p-4 w-full  ${
        props.clickMe ? 'cursor-pointer ' : ''
      }`"
      v-for="meal in props.meals"
      :key="meal.id"
    >
      <a class="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          :src="meal.image"
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          ({{ meal.ingredients }})
        </h3>
        <h2 class="text-gray-900 title-font text-xl font-medium">
          {{ meal.title }}
        </h2>
        <div class="flex items-center justify-between">
          <p class="mt-1 font-bold">{{ meal.price }} EGP</p>
          <button
            @click="storeMeals.addToCart(meal)"
            v-if="!props.deleteMe"
            class="bg-primary p-2 text-basic hover:bg-secondary rounded"
          >
            اضافة الي السلة
          </button>
        </div>
        <div class="flex items-center gap-2 h-14">
          <button
            v-if="props.editMe"
            @click="`${$router.push(`/dashboard/edit/${meal.id}`)}`"
            class="bg-primary p-2 text-basic rounded"
          >
            تعديل
          </button>
          <button
            v-if="props.deleteMe"
            @click="$emit('openModel', meal.id)"
            class="bg-primary p-2 text-basic rounded"
          >
            مسح
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
