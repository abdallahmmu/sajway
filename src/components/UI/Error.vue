<template>
  <div
    class="bg-primary rounded-md border-basic text-basic border-l-4 p-4 mb-2"
    role="alert"
  >
    <p>{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "يوجد خطأ ما هنا",
  },
});
</script>
