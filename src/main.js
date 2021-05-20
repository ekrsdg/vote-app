import Vue from 'vue'
import App from './App.vue'
import './assets/style/main.scss';
import router from './router/router.js';
import store from './store/index.js'


Vue.config.productionTip = false;

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
    render: h => h(App),
    router,
    store,
    beforeCreate() {
        this.$store.commit('initialiseStore');
    }
}).$mount('#app')
