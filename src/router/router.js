import Vue from 'vue';
import VueRouter from 'vue-router';

import linkList from '../views/list-link/list-link.vue';
import addLink from '../views/add-link/add-link.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: '/link-list',
    },
    {
        path: '/',
        redirect: '/link-list',
    },
    {
        path: '/link-list',
        name: 'linkList',
        component: linkList,
    },
    {
        path: '/add-link',
        name: 'addLink',
        component: addLink,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});


export default router;
