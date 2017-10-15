import * as types from './mutation-types';
/* eslint-disable */
export default {
  [types.SET_URL](state, payload) {
    state.apiEntryPoint = payload;
  },
  [types.PRE_HTTP_REQUEST](state) {
    state.loadingState = true;
  },
  [types.PRE_VOTE](state) {
    state.btnLoadingState = true;
  },
  [types.FETCHED_ADS_SUCCESS](state, payload) {
    state.loadingState = false;
    state.questions = [...payload];
    state.hasLoaded = true;
  },
  [types.VOTE](state, payload) {
    const myIndex = state.questions
      .findIndex(element => element.url === payload.data.question.url);
    const myChoiceIndex = state.questions[myIndex].choices
      .findIndex(element => element.url === payload.response.url);
    Object.assign(state.questions[myIndex].choices[myChoiceIndex], payload.response);
    state.btnLoadingState = false;
    state.questions[myIndex].voted = true;
  },
  [types.QUESTION_SAVED](state) {
    state.btnLoadingState = false;
    state.questionSaved = true;
    state.hasLoaded = false;
  },
  [types.RESET_QUESTION_FLAG](state) {
    state.questionSaved = false;
  },
};
