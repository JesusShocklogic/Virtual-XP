import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import {requiresLogin} from "./auth/guards";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "navbarLayout" */ "../components/NavbarLayout.vue"),
    children: [
      {
        path: '',
        name: 'Lobby',
        component: () => import(/* webpackChunkName: "lobby" */'../views/Lobby.vue'),
        beforeEnter: [requiresLogin]
      },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fullPageLayout" */ '../components/FullPageLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login"*/ "../views/Login.vue")
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import(/* webpackChunkName: "register"*/ "../views/CreateAccount.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
