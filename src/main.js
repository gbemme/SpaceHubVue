import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false




import Home from './components/Home.vue';
import ProductForm from './components/ProductForm.vue';
import ProductList from './components/ProductList.vue';
import BookForm from './components/BookForm.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },  
  {
    name: 'productForm',
    path: '/productForm',
    component: ProductForm
  },
  
  {
    name: 'productList',
    path: '/productList',
    component: ProductList
  },

  {
    name: 'book',
    path: '/book',
    component: BookForm
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});


new Vue(Vue.util.extend({ router }, App)).$mount('#app');
