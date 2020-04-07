import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Recipe from '../views/Recipe.vue'
import User from '../views/User.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/recipe/:recipeID',
    name: 'Recipe',
    component: Recipe,
    props: true
  },
  {
    path: '/user/:userID',
    name: 'User',
    component: User,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
