import Modal from '@/components/atomic/modal.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Modal, {
        propsData: {
            showModal: true,
            messageText: 'Test message',
            secondaryMessageText: 'Test'
        },
    });
});
describe('Modal Component', () => {
    it('should created modal', async () => {
        expect(wrapper.find('.modal-cage').exists()).toBeTruthy()
    });

});