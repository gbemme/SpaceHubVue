import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (componentName) {
    return () => import(`@/components/${componentName}.vue`)
}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: load('Home')
        },
        {
            path: '/blog',
            name: 'Blog',
            component: load('Blog')
        },
        {
            path: '/productlist',
            name: 'ProductList',
            component: load('ProductList')
        },

        {
            path: '/productform',
            name: 'ProductForm',
            component: load('ProductForm')
        },

        {
            path: '/login',
            name: 'Login',
            component: load('Login')
        },

        {
            path: '/register',
            name: 'Register',
            component: load('Register')
        },

        {
            path: '/portfolio',
            name: 'Portfolio',
            component: load('Portfolio')
        },
    ]
})

export default router