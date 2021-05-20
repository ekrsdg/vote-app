import ListLink from '@/views/list-link/list-link.vue'

let wrapper;
const state = {
    linkList:
        [
            {
                name: 'Google',
                link: 'www.google.com',
                rate: 1,
                updatedDate: 'Wed May 19 2021 02:01:28 GMT+0300 (GMT+03:00)'
            },
            {
                name: 'Facebook',
                link: 'www.facebook.com',
                rate: 4,
                updatedDate: 'Wed May 19 2021 03:09:28 GMT+0300 (GMT+03:00)'
            },
        ]
};

const store = new Vuex.Store({modules: {links: {state}}});


beforeEach(() => {
    wrapper = shallowMount(ListLink, {localVue, store});
});
describe('ListLink Component', () => {
    const filterList = jest.fn();
    const sliceLinkList = jest.fn();
    test('it should call filterList and sliceLinkList on created', async () => {
        const wrapper = shallowMount(ListLink,
            {
                localVue,
                store,
                methods: {filterList, sliceLinkList}
            });
        await wrapper.vm.$nextTick();
        expect(filterList).toHaveBeenCalled();
        expect(sliceLinkList).toHaveBeenCalled();
    });

    it('should apply lastUpdate filter to linkList when call filterList method with lastUpdate', () => {
        wrapper.setData({filterModel: 'lastUpdate'});
        wrapper.vm.filterList();
        expect(state.linkList[0].name).toEqual('Facebook');
    });

    it('should apply highToLow filter to linkList when call filterList method with highToLow', () => {
        wrapper.setData({filterModel: 'highToLow'});
        wrapper.vm.filterList();
        expect(state.linkList[0].name).toEqual('Facebook');
    });

    it('should apply lowToHigh filter to linkList when call filterList method with lowToHigh', () => {
        wrapper.setData({filterModel: 'lowToHigh'});
        wrapper.vm.filterList();
        expect(state.linkList[0].name).toEqual('Google');
    });

    it('should apply highToLow filter to linkList when call filterList method with highToLow (rates are equal)', () => {
        state.linkList[0].rate = 1;
        state.linkList[1].rate = 1;
        wrapper.setData({filterModel: 'highToLow'});
        wrapper.vm.filterList();
        expect(state.linkList[0].name).toEqual('Facebook');
    });

    it('should apply lowToHigh filter to linkList when call filterList method with lowToHigh (rates are equal)', () => {
        state.linkList[0].rate = 1;
        state.linkList[1].rate = 1;
        wrapper.setData({filterModel: 'lowToHigh'});
        wrapper.vm.filterList();
        expect(state.linkList[0].name).toEqual('Facebook');
    });

    it('should open toastr when trigger openToastr method', () => {
        const toastObject = {
            test: 'toastr'
        };
        wrapper.vm.openToastr(toastObject);
        expect(wrapper.vm.$data.toastrObject).toEqual(toastObject);
        expect(wrapper.vm.$data.toastrObject).toBeTruthy();
    });
});