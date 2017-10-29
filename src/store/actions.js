import api from '../api/api';
import * as types from './mutation-types';

export const requestItems = ({ commit, dispatch }) => {
  dispatch('getUrl');
  commit(types.PRE_HTTP_REQUEST);
};

export const getUrl = ({ commit, dispatch }) => {
  api.getUrl().then((data) => {
    commit(types.SET_URL, data);
    dispatch('fetchItems');
  });
};

export const fetchItems = ({ commit, dispatch, state }) => {
  commit(types.PRE_HTTP_REQUEST);
  api.fetchItems(state.apiEntryPoint, state.nextPage).then((data) => {
    dispatch('receiveItems', data);
  }).catch(() => {
    commit(types.FETCHED_ADS_FAIL);
  });
};

export const receiveItems = ({ commit }, data) => {
  commit(types.FETCHED_ADS_SUCCESS, data);
};

export const vote = ({ commit }, data) => {
  commit(types.BTN_LOADING);
  api.vote(data.choice).then((response) => {
    commit(types.VOTE, { response, data });
  }).catch((err) => {
    throw new Error(err);
  });
};

export const saveQuestion = ({ commit, state }, data) => {
  commit(types.BTN_LOADING);
  api.saveQuestion(state.apiEntryPoint, data).then((response) => {
    commit(types.QUESTION_SAVED, response);
  }).catch((err) => {
    throw new Error(err);
  });
};

