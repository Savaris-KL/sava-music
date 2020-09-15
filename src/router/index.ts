import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Playlist from '../views/Playlist.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Default',
    component: Playlist
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: () => import('@/views/Playlist.vue')
  },
  {
    path: '/cutin',
    name: 'Cutin',
    component: () => import('@/views/Cutin.vue')
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import('@/views/Scroll.vue')
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import('@/views/Plan.vue')
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: () => import('@/views/Lobby.vue')
  },
  {
    path: '/third',
    name: 'Third',
    component: () => import('@/views/Third.vue')
  },
  {
    path: '/local',
    name: 'Local',
    component: () => import('@/views/Local.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
