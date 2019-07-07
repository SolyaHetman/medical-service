import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Doctor/Dashboard.vue'
import NewPatient from './views/Doctor/NewPatient.vue'
import PatientInfo from './views/Doctor/PatientInfo.vue'
import DoctorRegion from './views/Doctor/DoctorRegion.vue'
import DoctorCentre from './views/Doctor/DoctorCentre.vue'
import MainDoctor from './views/Doctor/MainDoctor.vue'
import RegionInformation from './views/Doctor/RegionInformation.vue'

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
        },
        {
            path: '/patientinfo/:user',
            name: 'patientinfo',
            component: PatientInfo
        },
        {
            path: '/doctorRegion',
            name: 'doctorRegion',
            component: DoctorRegion
        },
        {
            path: '/doctorCentre',
            name: 'doctorCentre',
            component: DoctorCentre
        },
        {
            path: '/mainDoctor',
            name: 'mainDoctor',
            component: MainDoctor
        },
        {
            path: '/regionInformation/:user',
            name: 'regionInformation',
            component: RegionInformation
        },

    ]
})