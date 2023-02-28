import { createRouter, createWebHistory } from "vue-router";
import EmpForm from '@/views/emp/EmpForm.vue'

const routes = [
    {
        path: '/emp',
        name: 'EmpForm',
        component: EmpForm
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router