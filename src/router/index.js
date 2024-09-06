import Vue from 'vue'
import VueRouter from 'vue-router'
import PageAllTasks from "@/pages/PageAllTasks.vue";

Vue.use(VueRouter)

const routes = [
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
