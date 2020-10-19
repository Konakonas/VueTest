import Vue from 'vue'
import Router from 'vue-router'
import verification from './components/verification.vue'
import graphic from './components/graphic.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: verification
        },
        {
            path: '/graphic',
            component: graphic
        }
    ]
})
