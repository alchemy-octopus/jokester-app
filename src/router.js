import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Search from './components/search/Search';
import MySet from './components/myset/MySet';
import Rating from './components/rating/Rating';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/search', component: Search },
    { path: '/myset', component: MySet },
    { path: '/rating', component: Rating },
    { path: '*', redirect: '/' }
  ]
});