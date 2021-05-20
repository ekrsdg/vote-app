import {createLocalVue, config, shallowMount} from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();
config.silent = true;
config.showDeprecationWarnings = false;

localVue.use(Vuex);

global.shallowMount = shallowMount;
global.localVue = localVue;
global.Vuex = Vuex;


