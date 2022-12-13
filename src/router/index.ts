import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/gallery',
        name: 'GalleryPage',
        component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
