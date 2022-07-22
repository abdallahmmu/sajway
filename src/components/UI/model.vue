<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  confirmBtn: {
    type: String,
    default: "نعم",
  },
  canselBtn: {
    type: String,
    default: "لا",
  },
  modelValue: {
    type: Boolean,
  },
});
</script>

<template>
  <div>
    <div
      class="overlay fixed top-0 z-20 left-0 h-full w-full bg-primary opacity-40"
    ></div>
    <div
      class="model absolute top-1/2 z-30 left-1/2 translate-y-1/2 -translate-x-1/2 z-2 bg-primary border-secondary text-basic border-r-8 p-4 max-w-md"
    >
      <p class="font-bold">{{ title }}</p>
      <p>{{ subTitle }}</p>

      <div class="flex items-center justify-center gap-2 mt-2">
        <button
          class="p-1 py-2 px-4 bg-accept text-basic rounded-sm font-bold"
          @click="$emit('delete')"
        >
          {{ confirmBtn }}
        </button>
        <button
          @click="$emit('update:modelValue', false)"
          class="p-1 py-2 px-4 bg-red text-basic rounded-sm font-bold"
        >
          {{ canselBtn }}
        </button>
      </div>
    </div>
  </div>
</template>
