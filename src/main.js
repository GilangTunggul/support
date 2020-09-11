import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import routes from './routes';
import VueRouter from 'vue-router';
import axios from './plugins/axios';
import NavigationGuard from '@/helpers/navigation-guard.js'

Vue.prototype.$axios = axios;
// Vue.use(Notifications);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const Router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior: () => ({x:  0, y: 0}),
});
NavigationGuard(Router);


new Vue({
  vuetify,
  router: Router,
  render: h => h(App)
}).$mount('#app')