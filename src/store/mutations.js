import * as types from './mutation-types';

export default {
  [types.SET_URL](state, payload) {
    state.apiEntryPoint = payload;
  },
  [types.REQUESTED_ITEMS](state) {
    state.statusMessage = 'loading';
  },
  [types.FETCHING_ITEMS](state) {
    state.statusMessage = 'loading';
  },
  [types.VOTE](state) {
    state.statusMessage = 'loading';
  },
  [types.FETCHED_ADS_SUCCESS](state, payload) {
    state.questions = [...payload];
  },
  [types.DETAIL_VIEW](state, payload) {
    state.questions = [payload];
  },
  [types.INCREASE_PAGE](state) {
    state.page += 1;
  },
};
