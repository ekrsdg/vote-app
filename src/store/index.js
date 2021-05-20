import Vue from 'vue';
import Vuex from 'vuex';
import links from './modules/links.js';

Vue.use(Vuex);

export default new Vuex.Store({
    mutations: {
        initialiseStore(state) {
            if (localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    },
    modules: {
        global,
        links
    }
});
