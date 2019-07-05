import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2);
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')