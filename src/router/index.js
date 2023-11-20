import { createRouter, createWebHistory } from 'vue-router'
import MenuMainView from '../views/MenuMainView.vue'
import MenuSubView from '../views/MenuSubView.vue'
import ContentView from '../views/ContentView.vue'
import SearchView from '../views/SearchView.vue'

const routes = [
  {
    path: '/',
    name: 'MenuMainView',
    component: MenuMainView
  },
  {
    path: '/menu/:menu',
    name: 'MenuSubView-MainMenu',
    component: MenuSubView,
    props: (route) => ({
      menu: route.params.menu,
      submenu: false
    })
  },
  {
    path: '/submenu/:menu',
    name: 'MenuSubView-Submenu',
    component: MenuSubView,
    props: (route) => ({
      menu: route.params.menu,
      submenu: true
    })
  },
  {
    path: '/content/:key',
    name: 'ContentView',
    component: ContentView
  },
  {
    path: '/search',
    name: 'SearchView',
    component: SearchView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
