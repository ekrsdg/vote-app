import ListOrderFilter from '@/components/list-order-filter.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(ListOrderFilter, {
        data: {
            filterModel: 'test',
        },
    });
});
describe('Modal Component', () => {
    it('should emit filterChange when filterModel updated', async () => {
        wrapper.setData({filterModel: 'test1'});
        wrapper.vm.$emit('filterChange');
        expect(wrapper.emitted().filterChange).toBeTruthy();
    });
});