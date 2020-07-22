import Vue from 'vue'
import App from './App.vue'
import store from './store';
import Vue2Editor from "vue2-editor";

Vue.config.productionTip = false
// global register
Vue.use(Vue2Editor);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
