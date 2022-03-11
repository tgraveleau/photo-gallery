import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Piercings from './views/Piercings.vue'
import Tatoueurs from './views/Tatoueurs.vue'
import Tatouages from './views/Tatouages'
import Deontologie from './views/Deontologie'
import Contact from './views/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      label: 'Accueil',
      component: Home,
    },
    {
      path: '/tatoueurs',
      name: 'tatoueurs',
      label: `Tatoueurs`,
      component: Tatoueurs,
    },
    {
      path: '/tatouages',
      name: 'tatouages',
      label: 'Tatouages',
      component: Tatouages,
    },
    {
      path: '/piercings',
      name: 'piercings',
      label: 'Piercings',
      component: Piercings,
    },
    {
      path: '/deontologie',
      name: 'deontologie',
      label: 'Déontologie',
      component: Deontologie,
    },
    {
      path: '/contact',
      name: 'contact',
      label: 'Contact',
      component: Contact,
    },
  ]
})
