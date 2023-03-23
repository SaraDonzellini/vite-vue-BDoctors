import { createRouter, createWebHistory } from 'vue-router';

import Doctors from './pages/PageDoctors.vue';
import Home from './pages/PageHome.vue';



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/doctors',
      name: 'doctors',
      component: Doctors
    },

  ]

});

export { router };