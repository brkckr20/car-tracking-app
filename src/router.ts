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
        path: '/reports',
        component: () => import('./pages/Reports.vue'),
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