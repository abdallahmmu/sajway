<template>
  <div class="container">
    <div class="container mt-16">
      <div class="flex-row-reverse flex flex-wrap w-full mb-20">
        <div class="md:w-1/2 p-4 hidden md:block">
          <div class="bg-gray-100 p-6 rounded-lg">
            <img
              class="rounded w-full object-cover object-center mb-6 opacity-100 hover:opacity-40 cursor-pointer"
              src="./../../assets/img/الفروجة.jpg"
              alt="content"
            />
          </div>
        </div>
        <div class="md:w-1/2 flex items-center justify-center">
          <div class="bg-gray-100 rounded-lg">
            <h2
              class="text-2xl text-center text-gray-900 font-medium title-font mb-4"
            >
              أحلى طعم فراخ هتسرق قلوبكم من أول قطمة هتدوقوها في صاج واي♥
            </h2>

            <p class="mb-8 leading-relaxed">
              تحذير لكل الأكيلة ⚠️ مش هتلاقي الطعم المظبوط + الكمية الكبيرة إلا
              في صاج اواي
            </p>
            <div class="flex justify-center">
              <a
                href="#Collection"
                class="ml-4 inline-flex text-basic bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
              >
                اطلب الان
              </a>
              <router-link to="/about">
                <a
                  class="ml-4 inline-flex text-basic bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
                >
                  تعرف علينا
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
