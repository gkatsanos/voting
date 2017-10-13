import api from '../api';
import * as types from './mutation-types';

export const requestItems = ({ commit, dispatch }) => {
  commit(types.REQUESTED_ITEMS);
  dispatch('fetchItems');
};

export const fetchItems = ({ commit, dispatch }) => {
  commit(types.FETCHING_ITEMS);
  api.fetchItems().then((data) => {
    dispatch('receiveItems', data);
  }).catch((err) => {
    console.log(err);
  });
};

export const receiveItems = ({ commit }, data) => {
  commit(types.FETCHED_ADS_SUCCESS, data);
};

export const detailView = ({ commit }, data) => {
  commit(types.DETAIL_VIEW, data);
};

export const increasePage = ({ commit }, data) => {
  commit(types.INCREASE_PAGE, data);
};
