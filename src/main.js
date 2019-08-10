import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { fire } from './firebase'
import BootstrapVue from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(BootstrapVue)
import { rtdbPlugin } from 'vuefire'
Vue.use(VueSweetalert2);
Vue.use(rtdbPlugin)
Vue.config.productionTip = false

let app;

fire.auth().onAuthStateChanged(function() {
  if(!app){
    app = new Vue({
      el: '#app',
      router: router,
      rtdbPlugin,
      BootstrapVue,
     
      fire,
      render: h => h(App)
    }).$mount('#app')
    
  }
})
