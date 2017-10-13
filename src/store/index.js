import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [
    ],
  },
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
