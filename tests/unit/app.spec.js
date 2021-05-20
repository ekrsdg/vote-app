import App from '@/App.vue';

let wrapper;


beforeEach(() => {
    wrapper = shallowMount(App, {});
});
describe('App Component', () => {
    it('should created App', async () => {
        expect(wrapper.find('.main-cage').exists()).toBeTruthy()
    });

});