<script setup>
import { authStore } from "./../../store/authAdmin";
const auth = authStore();

const logOut = () => {
  auth.logMeOut();
};
</script>

<template>
  <div>
    <div class="h-screen hidden lg:block my-4 mr-4 shadow-lg relative w-80">
      <div class="bg-primary text-basic h-full rounded-2xl">
        <div class="flex items-center justify-center pt-6">
          <img src="./../../assets/img/logo.png" class="w-24 h-24" alt="" />
        </div>
        <nav class="mt-6">
          <div
            v-if="auth.isAuth"
            class="bg-secondary text-baisc ml-4 p-2 rounded-sm text-center"
          >
            <p class="text-md font-bold">مرحبا بك</p>
            <span class="text-sm">{{ auth.adminID.email }}</span>
          </div>
          <div>
            <router-link to="/dashboard">
              <a
                class="w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start"
              >
                <span class="text-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--eva"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44ZM10 20v-6h4v6Zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15l7 7.19Z"
                    ></path>
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal"> الرئيسية </span>
              </a>
            </router-link>
            <router-link to="/dashboard/addProduct">
              <a
                class="w-full text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              >
                <span class="text-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--eva"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43Zm.5 11a.46.46 0 0 1-.5.43h-15a.46.46 0 0 1-.5-.43V5.93a.46.46 0 0 1 .5-.43h4.13l2.6 3.18a1 1 0 0 0 .77.37h7.5a.46.46 0 0 1 .5.43Z"
                    ></path>
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal">
                  اضافة وجبة او ساندوتش
                </span>
              </a>
            </router-link>
            <router-link to="/dashboard/orders">
              <a
                class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              >
                <span class="text-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--eva"
                    width="20"
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M21.6 11.22L17 7.52V5a1.91 1.91 0 0 0-1.81-2H3.79A1.91 1.91 0 0 0 2 5v10a2 2 0 0 0 1.2 1.88a3 3 0 1 0 5.6.12h6.36a3 3 0 1 0 5.64 0h.2a1 1 0 0 0 1-1v-4a1 1 0 0 0-.4-.78ZM20 12.48V15h-3v-4.92ZM7 18a1 1 0 1 1-1-1a1 1 0 0 1 1 1Zm5-3H4V5h11v10Zm7 3a1 1 0 1 1-1-1a1 1 0 0 1 1 1Z"
                    ></path>
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal"> الطلبات </span>
              </a>
            </router-link>
            <router-link to="/dashboard/support">
              <a
                class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
              >
                <span class="text-right">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
                    ></path>
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal"> الدعم الفني </span>
              </a>
            </router-link>
            <button
              v-if="auth.isAuth"
              @click="logOut"
              class="bg-secondary text-baisc ml-4 p-2 rounded-sm text-center"
            >
              تسجيل الخروج
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
