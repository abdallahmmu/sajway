import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path : '/',

        component: ()=>  import('../Pages/index.vue'), 
        meta: { transition: 'fade', clientNav : true },

    },
    {
        path:'/about',
        component:  ()=>  import('../Pages/aboutPage.vue'),
        meta: { transition: 'fade',clientNav : true  },

    },
    {
        path: '/login',
        component: ()=>  import('../Pages/loginPage.vue'),
        meta: { transition: 'fade',clientNav : true  },
    },
    {
        path: '/cart',
        component:  ()=>  import('../Pages/cartPage.vue'),
        meta: { transition: 'fade',clientNav : true  },
    },
    {
        path: '/meals',
        component:  ()=>  import('../Pages/productsPage.vue'),
        meta: { transition: 'fade', clientNav : true  },
    },    
    {
        path: '/dashboard',
        component: () => import('../Pages/dashboardPage.vue'),
        children: [
            {
                path:'',
                component: () => import('./../components/DashboardUI/homeUI.vue'),
              
            },
            {
                path:'edit/:id',
                component: () => import('./../components/DashboardUI/edit.vue'),
              
            },
            {
                path:'addProduct',
                component: () => import('./../components/DashboardUI/addProduct.vue'),
              
            },
            {
                path:'orders',
                component: () => import('./../components/DashboardUI/orders.vue'),
               
            },
            {
                path:'support',
                component: () => import('./../components/DashboardUI/support.vue'),
              
            },
         ],
    },
    {
        path: '/:pathMatch(.*)*', 
         
        redirect: '/'
    },
  ]

  const router =  createRouter({
    history: createWebHistory(),
    routes:routes
  })

  export default router