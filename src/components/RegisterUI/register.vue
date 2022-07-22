<script setup>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, sameAs, minLength } from "@vuelidate/validators";
import { computed } from "@vue/reactivity";
import ErrorVue from "../UI/Error.vue";

const userInfo = reactive({
  email: "",
  password: "",
  confirmPassword: "",
});

//using vuelidated to confirm
const rules = computed(() => {
  return {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    confirmPassword: {
      required,
      sameAs: sameAs(userInfo.password),
    },
  };
});
// bassing the vuelidate
const v$ = useVuelidate(rules, userInfo);

// register method

const registerUser = async () => {
  //waiting the vuelidate async to check
  await v$.value.$validate();

  if (v$.value.$error) {
    return;
  } else {
    console.log("register");
  }
};
</script>

<template>
  <div class="container mt-6">
    <div class="flex flex-wrap w-full">
      <div class="flex flex-col w-full md:w-1/2">
        <div
          class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
        >
          <p class="text-3xl text-center">مرحباَ بك.</p>
          <form
            class="flex flex-col pt-3 md:pt-8"
            @submit.prevent="registerUser"
          >
            <div class="flex flex-col pt-4">
              <div v-if="v$.email.$error">
                <ErrorVue
                  title="تأكد من ادخال البريد الالكتروني بالطريقة الصحيحة"
                ></ErrorVue>
              </div>
              <div class="flex relative">
                <span
                  class="inline-flex items-center px-3 border-t bg-basic border-r border-b border-primary shadow-sm text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    class="iconify iconify--eva"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="email"
                  v-model="userInfo.email"
                  class="flex-1 appearance-none border border-primary w-full py-2 px-4 bg-basic shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="البريد الالكتروني"
                />
              </div>
            </div>
            <div class="flex flex-col pt-4 mb-12">
              <div v-if="v$.password.$error" class="text-center">
                <ErrorVue
                  title="تأكد من ادخال الرقم السري بطريقة صحيحه ولا يقل عن 8 ارمز"
                ></ErrorVue>
              </div>
              <div class="flex relative">
                <span
                  class="inline-flex items-center px-3 border-t bg-basic border-r border-b border-gray-300 text-gray-500 shadow-sm text-sm"
                >
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
                    ></path>
                  </svg>
                </span>
                <input
                  v-model="userInfo.password"
                  type="password"
                  class="flex-1 appearance-none border border-primary w-full py-2 px-4 bg-basic shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="الرقم السري"
                />
              </div>
            </div>
            <div class="flex flex-col mb-12">
              <div v-if="v$.confirmPassword.$error">
                <ErrorVue
                  title="تأكد من ادخال البريد الالكتروني بالطريقة الصحيحة"
                ></ErrorVue>
              </div>
              <div class="flex relative">
                <span
                  class="inline-flex items-center px-3 border-t bg-basic border-r border-b border-gray-300 text-gray-500 shadow-sm text-sm"
                >
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"
                    ></path>
                  </svg>
                </span>
                <input
                  v-model="userInfo.confirmPassword"
                  type="password"
                  id="design-login-password"
                  class="flex-1 appearance-none border border-primary w-full py-2 px-4 bg-basic shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="تأكيد الرقم السري"
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-primary px-4 py-2 text-base font-semibold text-center text-basic transition duration-200 ease-in bg-black shadow-md hover:text-basic hover:bg-secondary focus:outline-none focus:ring-2"
            >
              <span class="w-full"> أنشاء حساب </span>
            </button>
          </form>
          <div class="pt-12 pb-12 text-center">
            <p>
              لديك حساب بالفعل ؟
              <router-link to="/login">
                <a class="font-semibold underline"> تسجيل الدخول. </a>
              </router-link>
            </p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <img
          src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/254960416_215527927361137_8005132762687967600_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Z1OmlefND7EAX-bmeV2&_nc_ht=scontent.fcai21-3.fna&oh=00_AT_diBIUk1DLFznwn67pQLnizi2cgvFo5egcmI3OL6YKVw&oe=62D59C86"
          class="hidden object-cover w-full shadow-2xl h-1/2-screen md:block"
        />
      </div>
    </div>
  </div>
</template>
