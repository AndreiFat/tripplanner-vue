import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import AddAccommodations from "@/components/Accommodations/AddAccommodations.vue";
import AddAttractions from "@/components/Attractions/AddAttractions.vue";
import './assets/css/style.css';
import AttractionDetection from "@/components/Attractions/AttractionDetection.vue";
import AccommodationDetection from "@/components/Accommodations/AccommodationDetection.vue";
import RideInfo from "@/components/Rides/RideInfo.vue";
import HomePage from "@/components/HomePage.vue";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

// Define routes
const routes = [
    {path: '/add_accommodations', component: AddAccommodations},
    {path: '/add_attractions', component: AddAttractions},
    {path: '/attraction_detection', component: AttractionDetection},
    {path: '/accommodations_detection', component: AccommodationDetection},
    {path: '/ride_info', component: RideInfo},
    {path: '/popups', component: HomePage}
]

// Set up VueRouter with routes
const router = new VueRouter({
    mode: 'history', // This enables history mode
    routes,
})

new Vue({
    render: h => h(App),
    router, // Include the router
}).$mount('#app')
