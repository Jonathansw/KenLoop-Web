import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Guitar from '@/components/Guitar';
import About from '@/components/About';
import Bags from '@/components/Bags';
import Wind from '@/components/Wind';
import Percussion from '@/components/Percussion';
import Contact from '@/components/Contact';

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
      path: '/percussion',
      name: 'percussion',
      component: Percussion,
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
      path: '/bags',
      name: 'bags',
      component: Bags,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
