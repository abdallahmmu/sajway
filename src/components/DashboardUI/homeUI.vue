<script setup>
import { dashboardStore } from "../../store/dashboard";
import modelVue from "../UI/model.vue";
import ProductItem from "../ProductsUI/productItem.vue";
import spinnerVue from "../UI/spinner.vue";
import { computed, onMounted, ref } from "vue";
const dashStore = dashboardStore();
const model = ref(false);
const dataID = ref("");

onMounted(() => {
  dashStore.getMeals();
  dashStore.getOrders();
});

const data = computed(() => {
  return dashStore.getAllMeals;
});

// methods //

const openModel = (id) => {
  model.value = true;
  dataID.value = id;
};

const deleteNow = () => {
  dashStore.deleteItem(dataID.value);
  model.value = false;
};
</script>

<template>
  <div>
    <div class="overflow-auto h-screen pb-24 pt-2 pr-2 md:pt-0 md:pr-0">
      <h1 class="text-4xl font-semibold text-basic dark:text-white">
        مرحبا بك نتمني لك ادارة ممتعه
      </h1>
      <h2 class="text-md font-bold mt-2 text-primary">تابع كل جديد من هنا</h2>
      <div class="flex flex-wrap text-center text-basic">
        <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-basic w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M3 18v-6a9 9 0 0118 0v6"></path>
              <path
                d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
              ></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">
              {{ dashStore.getUpdatedOrders.length }}
            </h2>
            <p class="leading-relaxed">الطلبات</p>
          </div>
        </div>
        <div class="p-4 md:w-1/2 sm:w-1/2 w-full">
          <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="text-basic w-12 h-12 mb-3 inline-block"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">
              {{ dashStore.meals.length }}
            </h2>
            <p class="leading-relaxed">المنتاجات</p>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-center text-xl font-bold text-basic"
        v-if="dashStore.meals.length <= 0"
      >
        عفوا لا يوجد لديك اي وجبات
      </div>
      <div
        class="mt-6 font-bold text-xl text-basic"
        v-if="dashStore.meals.length > 0"
      >
        اخر الاضافات
      </div>

      <!-- LOADING  -->
      <spinnerVue v-if="dashStore.isLoading" />
      <!-- PRODUCT ITEM-->
      <ProductItem
        :meals="data"
        :deleteMe="true"
        :editMe="true"
        @openModel="openModel"
      />

      <teleport to="body">
        <transition name="fade" mode="in-out">
          <div v-if="model">
            <modelVue
              title="تنبية"
              subTitle="هل انت متأكد من انك تريد المسح ؟"
              confirmBtn="نعم"
              canselBtn="لا"
              v-model="model"
              @delete="deleteNow"
            />
          </div>
        </transition>
      </teleport>
    </div>
  </div>
</template>
