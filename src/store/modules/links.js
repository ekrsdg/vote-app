export default {
    namespaced: true,
    state: {
        linkList: [
            {
                name: 'Google',
                link: 'www.google.com',
                rate: 0,
                updatedDate: 'Wed May 19 2021 02:01:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Facebook',
                link: 'www.facebook.com',
                rate: 0,
                updatedDate: 'Wed May 19 2021 01:09:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Reddit',
                link: 'www.reddit.com',
                rate: 0,
                updatedDate: 'Wed May 19 2021 01:11:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Product Hunt',
                link: 'www.producthunt.com',
                rate: 0,
                updatedDate: 'Wed May 18 2021 01:07:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Twitter',
                link: 'www.twitter.com',
                rate: 0,
                updatedDate: 'Wed May 19 2021 01:02:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Product Hunt',
                link: 'www.producthunt.com',
                rate: 0,
                updatedDate: 'Wed May 1 2021 01:03:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Binance',
                link: 'www.binance.com',
                rate: 0,
                updatedDate: 'Wed May 1 2021 01:21:28 GMT+0300 (GMT+03:00)'
            },
        ]
    },
    actions: {
        addLink({commit}, data) {
            commit('ADD_LINK', data);
        },
        deleteLink({commit}, data) {
            commit('DELETE_LINK', data);
        },
        updateLinkRate({commit}, data) {
            commit('UPDATE_LINK_RATE', data)
        }
    },
    mutations: {
        ADD_LINK(state, payload) {
            state.linkList.push(payload);
        },
        DELETE_LINK(state, payload) {
            const linkIndex = state.linkList.indexOf(payload);
            state.linkList.splice(linkIndex, 1);
        },
        UPDATE_LINK_RATE(state, payload) {
            const linkIndex = state.linkList.indexOf(payload.link);
            state.linkList[linkIndex].rate += payload.vote;
            state.linkList[linkIndex].updatedDate = new Date();
        }
    },
};
