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
    stateLoaded: false,
    loadingState: false,
    btnLoadingState: false,
    questionSaved: false,
    voted: false,
    apiEntryPoint: '',
    nextPage: 1,
    maxPagesReached: false,
  },
  actions,
  mutations,
  getters,
  strict: process.env.NODE_ENV !== 'production',
});
