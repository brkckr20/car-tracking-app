import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('./pages/Home.vue'),
    },
    {
        path: '/car',
        component: () => import('./pages/Car.vue'),
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router;