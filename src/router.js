import { createRouter, createWebHistory } from 'vue-router';

import Doctors from './pages/PageDoctors.vue';
import Home from './pages/PageHome.vue';
import SinglePageDoctor from './pages/SinglePageDoctor.vue';



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
    {
      path: '/doctors/:id',
      name: 'doctor',
      component: SinglePageDoctor
  },
  ]

});

export { router };