<script setup>
import NavbarVue from "./navbar.vue";
import { onMounted } from "vue";
import { AuthStore } from "./../../store/authAdmin";
const auth = AuthStore();

const logOut = () => {
  auth.logMeOut();
};

onMounted(() => {
  auth.getUserStatus();
});
</script>

<template>
  <div class="container">
    <main class="bg-secondary rounded-2xl h-screen overflow-auto relative">
      <div class="flex items-start justify-between">
        <NavbarVue />
        <div class="flex flex-col w-full pr-0 md:p-4 md:space-y-4">
          <router-view> </router-view>
        </div>
      </div>
    </main>
  </div>
</template>
