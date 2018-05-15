import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Guitar from '@/components/Guitar';
import About from '@/components/About';
import Bags from '@/components/Bags';
import Wind from '@/components/Wind';
import Percussion from '@/components/Percussion';
import Contact from '@/components/Contact';
import Product from '@/components/Product';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/guitar',
      name: 'guitar',
      component: Guitar,
    },
    {
      path: '/guitar/:productName',
      component: Product,
      props: true,
    },
    {
      path: '/percussion',
      name: 'percussion',
      component: Percussion,
    },
    {
      path: '/percussion/:productName',
      component: Product,
      props: true,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/wind',
      name: 'wind',
      component: Wind,
    },
    {
      path: '/wind/:productName',
      component: Product,
      props: true,
    },
    {
      path: '/bags',
      name: 'bags',
      component: Bags,
    },
    {
      path: '/bags/:productName',
      component: Product,
      props: true,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
