<script setup>
import Error from "../UI/Error.vue";
import axios from "axios";
import { ref, reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { dashboardStore } from "./../../store/dashboard";

//define data
const dashStore = dashboardStore();
const imageisLoading = ref(true);
const alert = ref(true);

const formAdd = reactive({
  title: "",
  image: "",
  price: "",
  ingredients: "",
  catigory: "",
});

const rules = computed(() => {
  return {
    title: { required },
    image: { required },
    price: { required },
    ingredients: { required },
    catigory: { required },
  };
});

//methods

// handel the image upload

const UploadImage = (file) => {
  imageisLoading.value = false;
  const CLOUDINARY_BASE_URL =
    "https://api.cloudinary.com/v1_1/dzx2vt25l/image/upload";
  const CLOUDINARY_PRESET = "sbcjv8ir";
  let newFile = file.target.files[0];

  let formData = new FormData();
  formData.append("file", newFile);
  formData.append("upload_preset", CLOUDINARY_PRESET);

  axios({
    method: "post",
    secure: true,
    url: CLOUDINARY_BASE_URL,
    data: formData,
  }).then((res) => {
    formAdd.image = res.data.url;
    imageisLoading.value = true;
  });
};

const addMealToDB = async () => {
  await v$.value.$validate();

  if (v$.value.$error) {
    return;
  } else {
    dashStore.addToDB(formAdd);
  }
};
const v$ = useVuelidate(rules, formAdd);
</script>

<template>
  <div class="container space-y-3">
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-bold text-basic ml-auto">اضافة المنتجات</h2>
    </div>
    <transition name="fade">
      <div
        v-if="alert"
        class="intro-y col-span-11 p-4 bg-primary text-basic rounded-md alert-dismissible show flex items-center justify-between mb-6"
        role="alert"
      >
        <span
          ><svg
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
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
            ></path>
            <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
            <path
              fill="currentColor"
              d="M12 7a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z"
            ></path></svg
        ></span>
        <span class="flex-grow mr-1">
          هنا يمكن لك اضافة العديد من المنتجات يرجاء اضافة البيانات كاملة
        </span>

        <button
          @click="alert = !alert"
          type="button"
          class="btn-close text-white"
          data-tw-dismiss="alert"
          aria-label="Close"
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
              d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
            ></path>
          </svg>
        </button>
      </div>
    </transition>

    <div class="md:mx-2 p-4 bg-basic rounded-sm space-y-4">
      <form @submit.prevent="addMealToDB">
        <div class="space-y-6 bg-white">
          <div
            class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">اسم المنتج</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div v-if="v$.title.$error">
                <Error
                  title="تأكد من ادخال اسم المنتج بالطريقة الصحيحة"
                ></Error>
              </div>

              <div class="relative">
                <input
                  v-model="formAdd.title"
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
            <h2 class="max-w-sm mx-auto md:w-1/3">صورة المنتج</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div v-if="v$.title.$error">
                <Error
                  title="تأكد من ادخال صورة المنتج بالطريقة الصحيحة"
                ></Error>
              </div>
              <p class="mb-1 text-sm tracking-tight text-primary font-bold">
                يفضل استخدام صورة من من مقاس 200x150
              </p>
              <div class="relative">
                <input
                  v-on:change="UploadImage"
                  type="file"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>
              <div class="flex items-center justify-center">
                <img
                  v-if="formAdd.image"
                  class="w-24 h-24"
                  :src="formAdd.image"
                  alt="صورة منتج"
                />
                <p v-if="!imageisLoading">جاري تحميل الصورة يرجي الانتظار ..</p>
              </div>
            </div>
          </div>
          <hr />
          <div
            class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">سعر المنتج</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div v-if="v$.price.$error">
                <Error title="يرجي اضافة السعر برقم صحيح"></Error>
              </div>
              <div class="relative">
                <input
                  v-model="formAdd.price"
                  min="0"
                  type="number"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="اضف سعر للمنتج"
                />
              </div>
            </div>
          </div>
          <hr />
          <div
            class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm mx-auto md:w-1/3">مكونات المنتج</h2>
            <div class="max-w-sm mx-auto md:w-2/3">
              <div v-if="v$.ingredients.$error">
                <Error title="تأكد من اضافة المكونات ووضع ( + )"></Error>
              </div>
              <div class="relative">
                <input
                  v-model="formAdd.ingredients"
                  type="text"
                  class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="اضف مكونات المنتج مع مراعات اضافة (+)"
                />
              </div>
            </div>
          </div>
          <hr />
          <div
            class="items-center w-full p-8 space-y-4 text-gray-500 md:inline-flex md:space-y-0"
          >
            <h2 class="max-w-sm md:w-4/12">نوع المنتج</h2>
            <div
              class="w-full max-w-sm pr-2 space-y-5 md:w-5/12 md:pr-9 md:inline-flex"
            >
              <div>
                <div v-if="v$.catigory.$error">
                  <Error title="تأكد من اختيار نوع المنتج"></Error>
                </div>
                <select
                  v-model="formAdd.catigory"
                  class="block py-2 px-3 border border-gray-300 bg-basic rounded-md shadow-sm"
                >
                  <option disabled value="">
                    يرجا التأكد من اختيار نوع المنتج
                  </option>
                  <option>وجبة</option>
                  <option>ساندوتش</option>
                </select>
              </div>
            </div>
          </div>

          <div class="w-full px-4 pb-4 ml-auto text-gray-500">
            <button
              type="submit"
              class="py-2 px-4 bg-primary hover:bg-secondary focus:ring-blue-500 focus:ring-offset-blue-200 text-basic w-full transition ease-in duration-200 text-center text-base font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              اضافة
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
