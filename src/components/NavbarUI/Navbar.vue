<script setup>
import { ref } from "vue";
import { Meals } from "../../store/meals";

const mealsStore = Meals();

const menuMobileToggle = ref(false);
</script>

<template>
  <div>
    <nav
      class="bg-primary dark:bg-gray-800 shadow"
      v-if="$route.meta.clientNav"
    >
      <div class="container">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <a class="flex-shrink-0" href="/">
              <img
                class="h-20 w-20"
                src="./../../assets/img/logo.png"
                alt="Workflow"
              />
            </a>
            <div class="hidden md:block">
              <div class="mr-5 flex items-baseline">
                <router-link to="/">
                  <a
                    class="text-basic hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    الصفحة الرئيسيه
                  </a>
                </router-link>
                <router-link to="/about">
                  <a
                    class="text-basic dark:text-white hover:text-secondary dark:hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                  >
                    تعرف علينا
                  </a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="block">
            <div class="mr-4 flex items-center justify-start md:mr-6">
              <router-link to="/meals">
                <a
                  class="text-basic bg-secondary dark:text-white hover:text-primary dark:hover:text-white px-3 py-2 rounded-md text-sm font-bold"
                >
                  اطلب الان
                </a>
              </router-link>
              <!--ICON SHOP CART-->
              <div class="mr-3 relative">
                <div class="relative inline-block text-left">
                  <div>
                    <router-link to="/cart">
                      <button
                        type="button"
                        class="flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none"
                      >
                        <button
                          v-if="mealsStore.cart.length > 0"
                          type="button"
                          class="w-6 h-6 absolute -top-1 -right-1 rounded-full text-white bg-accept"
                        >
                          <span>
                            {{ mealsStore.cart.length }}
                          </span>
                        </button>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          aria-hidden="true"
                          role="img"
                          class="iconify text-secondary iconify--eva"
                          width="20"
                          height="20"
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7Zm-4.7 7H8.76L7.13 8h12.25Z"
                          ></path>
                          <circle
                            cx="7.5"
                            cy="19.5"
                            r="1.5"
                            fill="currentColor"
                          ></circle>
                          <circle
                            cx="17.5"
                            cy="19.5"
                            r="1.5"
                            fill="currentColor"
                          ></circle>
                        </svg>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
              <!-- ICON MOBILE MENU-->
              <div
                class="-mr-2 flex md:hidden"
                @click="menuMobileToggle = !menuMobileToggle"
              >
                <button
                  class="text-secondary dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="#F79321"
                    class="h-6 w-6"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md:hidden text-center" v-if="menuMobileToggle">
        <div
          class="px-2 pt-2 pb-3 space-y-1 sm:px-3"
          @click="menuMobileToggle = false"
        >
          <router-link to="/">
            <a
              class="text-basic hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              الصفحة الرئيسيه
            </a>
          </router-link>
          <router-link to="/about">
            <a
              class="text-basic dark:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              تعرف علينا
            </a>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
