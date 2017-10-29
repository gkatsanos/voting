import * as types from './mutation-types';
/* eslint-disable */
export default {
  [types.SET_URL](state, payload) {
    state.apiEntryPoint = payload;
  },
  [types.PRE_HTTP_REQUEST](state) {
    state.loadingState = true;
  },
  [types.BTN_LOADING](state) {
    state.btnLoadingState = true;
  },
  [types.FETCHED_ADS_SUCCESS](state, payload) {
    state.loadingState = false;
    state.questions = state.questions.concat(...payload);
    state.hasLoaded = true;
    state.nextPage += 1;
  },
  [types.FETCHED_ADS_FAIL](state) {
    state.loadingState = false;
    state.hasLoaded = true;
    state.nextPage = 1;
    state.maxPagesReached = true;
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
