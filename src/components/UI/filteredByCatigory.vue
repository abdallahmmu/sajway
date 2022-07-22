<script setup>
import { Meals } from "../../store/meals";

const storeMeals = Meals();
</script>

<template>
  <div class="filtered">
    <button
      @click="$emit('setView', 'الكل')"
      class="bg-primary text-basic p-1 rounded-sm hover:text-secondary px-2 mr-2 py-1"
    >
      الكل
    </button>
    <button
      @click="$emit('setView', 'وجبة')"
      class="bg-primary text-basic p-1 rounded-sm hover:text-secondary px-2 mr-2 py-1"
    >
      وجبة
    </button>
    <button
      @click="$emit('setView', 'ساندوتش')"
      class="bg-primary text-basic p-1 rounded-sm hover:text-secondary px-2 mr-2 py-1"
    >
      ساندوتش
    </button>
  </div>
</template>
