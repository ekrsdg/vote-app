import LinkCard from '@/components/link-card.vue'

let wrapper;
const state = {};
const store = new Vuex.Store({state});

const updateLinkRate = jest.fn();
const deleteLink = jest.fn();

beforeEach(() => {
    wrapper = shallowMount(LinkCard, {
        localVue,
        store,
        propsData: {
            linkInfo: {
                name: 'testName',
                link: 'www.testname.com',
                vote: 5,
            }
        },
        methods: {
            updateLinkRate,
            deleteLink
        }
    });
});
describe('LinkCard Component', () => {
    it('should emit linkUpdate and call updateLinkRate', async () => {
        wrapper.vm.voteLink();
        await wrapper.vm.$nextTick();
        expect(updateLinkRate).toHaveBeenCalled();
        wrapper.vm.$emit('currentPage');
        expect(wrapper.emitted().currentPage).toBeTruthy();
    });

    it('should set showDeleteModal true when openDeleteModal called', async () => {
        wrapper.vm.openDeleteModal();
        expect(wrapper.vm.$data.showDeleteModal).toBeTruthy();
    });

    it('should emit deleteToastr with toastr object , call delete link and set showDeleteModal false when call removeLink',
        async () => {
            wrapper.vm.removeLink();
            wrapper.vm.$emit('deleteToastr');
            expect(wrapper.emitted().deleteToastr).toBeTruthy();
            expect(deleteLink).toHaveBeenCalledWith(wrapper.vm.$props.linkInfo);
            expect(wrapper.vm.$data.showDeleteModal).toBeFalsy();
        });
});