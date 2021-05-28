import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { AuthGuards } from './auth-guards'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savePosition){
    if(savePosition){
      return savePosition
    }
    else{
      const position = {};
      if(to.hash){
        position.selector = to.hash;
        return false;
      }
    }
  },
  base: process.env.BASE_URL,
  routes
})

AuthGuards.setInstanceRouter(router)
AuthGuards.registerAuthGuard()

export default router
