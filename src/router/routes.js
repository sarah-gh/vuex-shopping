export const routes = [
    {
      path: '/',
      name: 'home',
      //component: () => import(/* webpackChunkName: "myhome" */ '../views/login/login.vue'),
      component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    }
    //not found?
    //* path
  ]