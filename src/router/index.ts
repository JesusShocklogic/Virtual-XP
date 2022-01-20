import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "navbarLayout" */ "../components/NavbarLayout.vue"),
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/lobby',
        name: 'Lobby',
        component: () => import(/* webpackChunkName: "lobby" */'../views/Lobby.vue')
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
        component: () => import(/* webpackChunkName: "login"*/ "../views/Login.vue")
      },
      {
        path: 'register',
        component: () => import(/* webpackChunkName: "register"*/ "../views/CreateAccount.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
