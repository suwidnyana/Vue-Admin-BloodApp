import firebase from 'firebase'

import Vue from 'vue'

import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Donor from './components/Donor'
import Profile from './components/Profile'

import Permintaan from './components/Permintaan'
//auth
import Login from './components/Auth/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/about',
      name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (about.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/donor',
      name: 'donor',
      component: Donor,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/permintaan',
      name: 'permintaan',
      component: Permintaan,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('/');
  else if (!requiresAuth && currentUser) next('/home');
  else next();
});

export default router;