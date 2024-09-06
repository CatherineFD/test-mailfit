import Vue from 'vue'
import VueRouter from 'vue-router'
import PageAllTasks from "@/pages/PageAllTasks.vue";
import Landing from "@/pages/Landing.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'landing',
    component: Landing
  },
  {
    path: '/',
    name: 'to-do',
    component: PageAllTasks
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
