<script setup>
import { Meals } from "../../store/meals";
import Error from "../UI/Error.vue";
import { computed, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, integer, minLength, maxLength } from "@vuelidate/validators";

const mealsStore = Meals();

const orderForm = reactive({
  name: "",
  address: "",
  method: "",
  phone: "",
});

//form validation

const rules = computed(() => {
  return {
    name: { required },
    address: { required },
    method: { required },
    phone: {
      required,
      integer,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
  };
});

const updatedMeals = computed(() => {
  return mealsStore.getCartUpdated;
});

//methods

const order = async () => {
  await v$.value.$validate();
  if (v$.value.$error) {
    return;
  }
  mealsStore.buyOrder(orderForm);
};
const v$ = useVuelidate(rules, orderForm);
</script>

<template>
  <div class="container mt-16">
    <div class="flex flex-col-reverse md:flex-row justify-between bg-basic">
      <!-- Form Content -->
      <div
        class="md:mx-2 md:w-1/2 p-4 bg-basic rounded-sm space-y-4"
        v-if="mealsStore.getCartUpdated.length > 0"
      >
        <p class="text-3xl font-bold">معلومات التواصل</p>
        <hr class="bg-primary h-1 border border-r-primary" />

        <form @submit.prevent="order">
          <div class="space-y-6 bg-white">
            <div
              class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
            >
              <h2 class="max-w-sm mx-auto md:w-1/3">الاسم</h2>
              <div class="max-w-sm mx-auto md:w-2/3">
                <div v-if="v$.name.$error">
                  <Error title="تأكد من ادخال الاسم  بالطريقة الصحيحة"></Error>
                </div>
                <div class="relative">
                  <input
                    v-model="orderForm.name"
                    type="text"
                    class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="الاسم"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div
              class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
            >
              <h2 class="max-w-sm mx-auto md:w-1/3">العنوان</h2>
              <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div v-if="v$.address.$error">
                  <Error title="تأكد من ادخال العنوان بالطريقة الصحيحة"></Error>
                </div>
                <div>
                  <div class="relative">
                    <input
                      v-model="orderForm.address"
                      type="text"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="العنوان"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
            >
              <h2 class="max-w-sm mx-auto md:w-1/3">رقم الهاتف</h2>

              <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div v-if="v$.phone.$error">
                  <Error
                    title="تأكد من ادخال رقم الهاتف بالطريقة الصحيحة"
                  ></Error>
                </div>
                <div>
                  <div class="relative">
                    <input
                      v-model="orderForm.phone"
                      type="text"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="رقم الهاتف"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div
              class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
            >
              <h2 class="max-w-sm md:w-4/12">كيف يمكنك استلام الطلب ؟</h2>
              <div
                class="w-full max-w-sm pr-2 space-y-5 md:w-5/12 md:pr-9 md:inline-flex"
              >
                <div>
                  <div v-if="v$.method.$error">
                    <Error
                      title="تأكد من ادخال اسم طرقة التوصيل بالطريقة الصحيحة"
                    ></Error>
                  </div>
                  <select
                    v-model="orderForm.method"
                    class="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option disabled value="">اختر طريقة التوصيل</option>
                    <option>في المطعم</option>
                    <option>التوصيل للمنزل</option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                class="py-2 px-4 bg-primary hover:bg-secondary focus:ring-blue-500 focus:ring-offset-blue-200 text-basic w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                اطلب الان
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="mx-auto md:mx-2 md:w-1/2 p-4 space-y-4">
        <p class="text-3xl font-bold">التفاصيل</p>
        <hr class="bg-primary h-1 border border-r-primary" />
        <div v-if="mealsStore.getCartUpdated.length === 0">
          لا يوجد لديك اي طلبات
        </div>

        <div class="flex flex-col" v-for="meal in updatedMeals" :key="meal.id">
          <div class="flex items-center justify-between gap-2">
            <img
              :src="meal.image"
              class="w-32 h-32 rounded-md"
              alt="Product"
              title="product"
            />
            <div class="flex flex-col space-y-2 w-full items-start">
              <p class="text-xl font-bold">{{ meal.title }}</p>
              <p class="text-md font-medium">{{ meal.price }}EGP</p>
              <div class="flex items-center justify-center gap-1">
                <button
                  class="w-8 px-1 h-8 bg-primary text-basic hover:bg-secondary text-xl rounded-full"
                  @click="mealsStore.increaseMeal(meal.id)"
                >
                  +
                </button>
                <p>الكمية :{{ meal.qty }}</p>
                <button
                  class="w-8 px-1 h-8 bg-primary text-basic hover:bg-secondary text-xl rounded-full"
                  @click="mealsStore.decreaseMeal(meal.id)"
                >
                  -
                </button>
                <button
                  class="w-8 px-2 h-8 bg-primary text-basic hover:bg-secondary text-xl rounded-full"
                  @click="mealsStore.deleteMeal(meal.id)"
                >
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
                      d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm6 0a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="float-left mt-2 font-bold text-xl"
          v-if="mealsStore.getTotal > 0"
        >
          المجموع : {{ mealsStore.getTotal }} EGP
        </div>
      </div>
    </div>
  </div>
</template>
