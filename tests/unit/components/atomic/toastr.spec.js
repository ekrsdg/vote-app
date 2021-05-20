import Toastr from '@/components/atomic/toastr.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Toastr, {
        propsData: {
            showToastr: false,
            message: 'Test message',
            status: 'success'
        },
        data: {
            timer: ''
        },
        mocks: {
            clearTimeout: jest.fn()
        }
    });
});
describe('Toastr Component', () => {
    it('should trigger timer when showToastr changed', async () => {
        jest.useFakeTimers();
        wrapper.setProps({showToastr: true});
        await wrapper.vm.$nextTick();
        expect(clearTimeout).toHaveBeenCalled();
        jest.runAllTimers();
        wrapper.vm.$emit('timeUp');
        expect(wrapper.emitted().timeUp).toBeTruthy();
    });
});