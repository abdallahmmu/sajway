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
});
</script>

<template>
  <div>
    <div
      class="absolute top-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 z-30 bg-primary border-secondary text-basic border-r-8 p-4 max-w-md"
      role="alert"
    >
      <p class="font-bold">{{ title }}</p>
      <p>{{ subTitle }}</p>
    </div>
  </div>
</template>
