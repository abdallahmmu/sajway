<template>
  <div class="container mt-16" id="Collection">
    <div class="flex flex-col text-center w-full mb-20">
      <h2
        class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
      >
        يلا بينا ؟
      </h2>
      <h1 class="sm:text-3xl text-2xl font-bold title-font text-gray-900">
        اطلب الان
      </h1>
    </div>
    <div class="flex flex-wrap w-full mb-20">
      <div class="md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <router-link to="/meals">
            <img
              class="min-h-40 rounded w-full object-cover object-center mb-6 opacity-100 hover:opacity-40 cursor-pointer"
              src="./../../assets/img/ساندوتش.jpg"
              alt="content"
            />
          </router-link>

          <h2
            class="text-2xl text-center text-gray-900 font-medium title-font mb-4"
          >
            ساندوتش
          </h2>
        </div>
      </div>
      <div class="md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <router-link to="/meals">
            <img
              class="min-h-40 rounded w-full object-cover object-center mb-6 opacity-100 hover:opacity-40 cursor-pointer"
              src="./../../assets/img/وجبات.jpg"
              alt="content"
            />
          </router-link>
          <h2
            class="text-2xl text-center text-gray-900 font-medium title-font mb-4"
          >
            واجبات
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
