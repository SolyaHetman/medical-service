import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Doctor/Dashboard.vue'
import NewPatient from './views/Doctor/NewPatient.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/newpatient',
            name: 'newpatient',
            component: NewPatient
        }
    ]
})