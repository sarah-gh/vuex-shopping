export const routes = [
    {
      path: '/',
      name: 'home',
      //component: () => import(/* webpackChunkName: "myhome" */ '../views/login/login.vue'),
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      // children:[
      //   {
      //   name: 'pizza',
      //   path: '/#sec-2',
      //   component: () => import(/* webpackChunkName: "pizza" */ '../resources/components/pizza/pizza.vue'),
      //   },
      //   {
      //     name: 'popularDishes',
      //     path: '/#sec-1',
      //     component: () => import(/* webpackChunkName: "popularDishes" */ '../resources/components/popularDishes/popularDishes.vue'),
      //   },
      //   {
      //     name: 'specialPacks',
      //     path: '/#sec-3',
      //     component: () => import(/* webpackChunkName: "specialPacks" */ '../resources/components/specialPacks/specialPacks.vue'),
      //   }

      // ]
    }
    //not found?
    //* path
  ]