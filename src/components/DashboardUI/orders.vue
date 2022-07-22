<script setup>
import { dashboardStore } from "../../store/dashboard";
import { onMounted, computed, reactive, ref } from "vue";
import modelVue from "../UI/model.vue";

const dashStore = dashboardStore();

const forFilter = reactive({
  searchInput: "",
  Orders: [],
});

// init the orders page
onMounted(() => {
  dashStore.getOrders();
});
// get the orders getter
const getOrdersNow = computed(() => {
  return dashStore.getUpdatedOrders;
});

// just for manipulate the reactive property with computed
forFilter.Orders = getOrdersNow;

// here i just filters the order in the client not the backend
const filter = computed(() => {
  return forFilter.Orders.filter((x) => {
    return x.method.includes(forFilter.searchInput);
  });
});

// delete the order if the maneger refused
const deleteOrder = (id) => {
  dashStore.deleteNow(id);
};

//update the accepted status

const updateAccepted = (id) => {
  dashStore.updateAcceptStatus(id);
};
</script>

<template>
  <div class="container mx-auto px-4 sm:px-8 max-w-3xl">
    <div class="py-8">
      <div class="flex flex-row mb-1 sm:mb-0 justify-between w-full">
        <h2 class="text-2xl leading-tight text-basic">الطلبات</h2>
        <div class="text-start">
          <form
            class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
          >
            <div class="relative">
              <input
                v-model="forFilter.searchInput"
                type="text"
                id='"form-subscribe-Filter'
                class="rounded-md border-transparent flex-1 appearance-none border border-primary w-full py-2 px-4 bg-bodybg placeholder-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="بحث عن طريقة التوصيل"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-md overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                >
                  الطلب
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                >
                  العنوان
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                >
                  رقم التليفون
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                >
                  طريقة التوصيل
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                >
                  الاجمالي
                </th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                ></th>
                <th
                  scope="col"
                  class="px-5 py-3 bg-bodybg border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal"
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="order in filter"
                :key="order.id"
                :class="`${order.accepted ? 'bg-accept' : 'bg-bodybg'}`"
              >
                <td class="px-2 py-5 border-b border-gray-200 text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p
                        class="text-gray-900 whitespace-no-wrap text-center w-20"
                        v-for="(item, index) in order.orderItem"
                        :key="index"
                      >
                        <span class="m-1">{{ item.qty }}</span>
                        <span>{{ item.title }}</span>
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                  <p class="text-gray-900 whitespace-no-wrap text-center">
                    {{ order.address }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                  <p class="text-gray-900 whitespace-no-wrap text-center">
                    {{ order.phone }}
                  </p>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ order.method }}
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap text-center">
                        {{ order.total }} EGP
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="px-5 py-5 border-b border-gray-200 bg-bodybg text-sm"
                >
                  <span
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    @click="deleteOrder(order.id)"
                  >
                    <span
                      aria-hidden="true"
                      class="absolute inset-0 cursor-pointer bg-primary opacity-50 rounded-full"
                    >
                    </span>
                    <span class="relative cursor-pointer"> مسح </span>
                  </span>
                </td>

                <td
                  class="px-5 py-5 border-b border-gray-200 bg-bodybg text-sm"
                >
                  <span
                    v-if="!order.accepted"
                    class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    @click="updateAccepted(order.id)"
                  >
                    <span
                      aria-hidden="true"
                      class="absolute inset-0 cursor-pointer bg-accept rounded-full text-center"
                    >
                    </span>
                    <span class="relative cursor-pointer text-center">
                      قبول
                    </span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            class="px-5 bg-bodybg py-5 flex flex-col xs:flex-row items-center xs:justify-between"
          >
            <div class="flex items-center" v-if="filter.length <= 0">
              لا يوجد شيء
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
