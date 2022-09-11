import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonInfo from '../views/PokemonInfo.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
}, {
    path: '/pokemon',
    name: 'pokemon-info',
    component: PokemonInfo
}]

const router = new VueRouter({
    routes
})

export default router