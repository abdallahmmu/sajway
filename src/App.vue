<script setup>
// imports

import NavbarVue from "./components/NavbarUI/Navbar.vue";
import FooterVue from "./components/FooterUI/footer.vue";
import { onMounted } from "vue";
</script>

<template>
  <NavbarVue />

  <router-view v-slot="{ Component }">
    <transition :name="$route.meta.transition" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </transition>
  </router-view>

  <FooterVue />
</template>

<style>
/* transitionss*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
