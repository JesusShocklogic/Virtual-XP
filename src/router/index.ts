import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Basic",
    component: () =>
      import(
        /* webpackChunkName: "navbarLayout" */ "../components/NavbarLayout.vue"
      ),
    children: [
      {
        path: "/lobby",
        name: "Lobby",
        component: () =>
          import(/* webpackChunkName: "lobby" */ "../views/Lobby.vue"),
      },
      {
        path: "/speakers",
        name: "Speakers",
        component: () => import("../views/Speakers.vue"),
      },
      {
        path: "/speaker",
        name: "Speaker",
        component: () => import("../views/Speaker.vue"),
      },
    ],
  },
  {
    path: "/auth",
    name: "Auth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "fullPageLayout" */ "../components/FullPageLayout.vue"
      ),
    children: [
      {
        path: "login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login"*/ "../views/Login.vue"),
      },
      {
        path: "register",
        name: "Register",
        component: () =>
          import(
            /* webpackChunkName: "register"*/ "../views/CreateAccount.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
