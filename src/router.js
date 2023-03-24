import { createRouter, createWebHistory } from 'vue-router';

import Doctors from './pages/PageDoctors.vue';
import Home from './pages/PageHome.vue';
import SinglePageDoctor from './pages/SinglePageDoctor.vue';
import PageSpec from './pages/PageSpecDoctor.vue';



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
      path: '/PageSpec',
      name: 'spec',
      component: PageSpec
    },

    {
      path: '/doctors/:id',
      name: 'doctor',
      component: SinglePageDoctor
  },
  ]

});

export { router };