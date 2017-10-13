import * as types from './mutation-types';

export default {
  [types.REQUESTED_ITEMS](state) {
    state.statusMessage = '';
  },
  [types.FETCHING_ITEMS](state) {
    state.statusMessage = '';
  },
  [types.FETCHED_ADS_SUCCESS](state, payload) {
    state.items = [...state.items, ...payload];
  },
  [types.INCREASE_PAGE](state) {
    state.page += 1;
  },
};
