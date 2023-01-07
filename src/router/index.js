import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/liste-membre',
    name: 'liste-membre',
    component: () => import('@/views/GestionMembre/ListeMembre.vue')
  },
  {
    path: '/fiche-membre/:id?',
    name: 'fiche-membre',
    component: () => import('@/views/GestionMembre/FicheMembre.vue')
  },
  {
    path: '/presence',
    name: 'presence',
    component: () => import('@/views/GestionPresence/Presence.vue')
  },
  {
    path: '/programme',
    name: 'programme',
    component: () => import('@/views/GestionProgramme/Programme.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
