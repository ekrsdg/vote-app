import Pagination from '@/components/atomic/pagination.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(Pagination, {
        propsData: {
            totalSize: 21,
            resetParam: 'false'
        },
    });
});
describe('Pagination Component', () => {
    const calculateTotalPage = jest.fn();
    test('it should call calculateTotalPage method on created', async () => {
        const wrapper = shallowMount(Pagination, {
            propsData: {
                totalSize: 21,
                resetParam: 'false'
            },
            methods: {calculateTotalPage},
        });
        await wrapper.vm.$nextTick();
        expect(calculateTotalPage).toHaveBeenCalled();
    });

    it('should increase pageNumber when  currentPage less than totalPage ', () => {
        wrapper.setData({currentPage: 1, totalPage: 5});
        wrapper.vm.pageUp();
        expect(wrapper.vm.$data.currentPage).toBe(2);
    });

    it('should not increase pageNumber when currentPage more or equal than totalPage ', () => {
        wrapper.setData({currentPage: 5, totalPage: 5});
        wrapper.vm.pageUp();
        expect(wrapper.vm.$data.currentPage).toBe(5);
    });

    it('should decrease pageNumber when currentPage more than 1 ', () => {
        wrapper.setData({currentPage: 3});
        wrapper.vm.pageDown();
        expect(wrapper.vm.$data.currentPage).toBe(2);
    });

    it('should not decrease pageNumber when currentPage equal to  1 ', () => {
        wrapper.setData({currentPage: 1});
        wrapper.vm.pageDown();
        expect(wrapper.vm.$data.currentPage).toBe(1);
    });

    it('should calculate totalPage when calculateTotalPage called', async () => {
        wrapper.vm.calculateTotalPage();
        expect(wrapper.vm.$data.totalPage).toBe(5);
    });

    it('should trigger calculateTotalPage when totalSize changed', () => {
        wrapper.setProps({totalSize: 25});
        expect(calculateTotalPage).toHaveBeenCalled();
    });

    it('should emit currentPage when currentPage changed', () => {
        wrapper.setData({currentPage: 8});
        wrapper.vm.$emit('currentPage');
        expect(wrapper.emitted().currentPage).toBeTruthy();
    });

    it('should reset currentPage when resetParam changed', () => {
        wrapper.setData({resetParam: 'true'});
        expect(wrapper.vm.$data.currentPage).toBe(1);
    });
});