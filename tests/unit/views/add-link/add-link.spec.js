import AddLink from '@/views/add-link/add-link.vue'

let wrapper;
const addLink = jest.fn();

beforeEach(() => {
    wrapper = shallowMount(AddLink, {
        methods: {addLink}
    });
});
describe('Modal Component', () => {
    it('should create link when trigger createLink', async () => {
        wrapper.vm.createLink();
        expect(addLink).toHaveBeenCalled();
        expect(wrapper.vm.$data.toastrObject).toStrictEqual({
            message: ' added.',
            status: 'success'
        });
        expect(wrapper.vm.$data.showToastr).toBeTruthy
    });

});