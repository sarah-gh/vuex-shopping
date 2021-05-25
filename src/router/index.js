import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { AuthGuards } from './auth-guards'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

AuthGuards.setInstanceRouter(router)
AuthGuards.registerAuthGuard()

export default router
