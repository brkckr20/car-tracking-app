import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/cards',
        component: () => import('./pages/Cards.vue'),
    },
    {
        path: '/logout',
        component: () => import('./pages/Test.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;