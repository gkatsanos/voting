jest.mock('@api/api');
import * as types from '@/store/mutation-types';
import flushPromises from 'flush-promises';

import {
  fetchItems,
  requestItems,
  saveQuestion,
  vote,
} from '../actions';


describe('fetchItems Action', () => {
  let state;
  let commit;
  let dispatch;
  beforeAll(() => {
  });

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    state = {
      apiEntryPoint: 'a',
      nextPage: 0,
    };
    fetchItems({
      commit,
      dispatch,
      state,
    });
  });

  it('should call a commit before fetching', () => {
    expect(commit).toHaveBeenCalledWith(types.PRE_HTTP_REQUEST);
  });

  it('should call receiveItems after succesful fetch', async () => {
    await flushPromises();
    expect(dispatch).toHaveBeenCalledWith('receiveItems', undefined);
  });

  it('should call a fail commit if request fails', async () => {
    await flushPromises();
    state = {
      apiEntryPoint: '',
      nextPage: 0,
    };
    fetchItems({
      commit,
      dispatch,
      state,
    });
    expect(commit).toHaveBeenLastCalledWith(types.FETCHED_ADS_FAIL);
    // expect(commit).toHaveBeenCalledTimes(2);
  });
});

describe('requestItems action', () => {
  let commit;
  let dispatch;
  beforeAll(() => {
  });

  beforeEach(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    requestItems({
      commit,
      dispatch,
    });
  });

  it('should dispatch a getUrl action', () => {
    expect(dispatch).toHaveBeenCalledWith('getUrl');
  });

  it('should commit a PRE mutation', () => {
    expect(commit).toHaveBeenCalledWith(types.PRE_HTTP_REQUEST);
  });
});

describe('saveQuestion action', () => {
  let commit;
  let state;
  beforeAll(() => {
  });

  beforeEach(() => {
    commit = jest.fn();
    state = {
      apiEntryPoint: '',
      nextPage: 0,
    };
    saveQuestion({
      commit,
      state,
    }, {});
  });

  it('should dispatch a loading action', () => {
    expect(commit).toHaveBeenCalledWith(types.BTN_LOADING);
  });

  it('on succesful question save, a commit should be triggered', async () => {
    await flushPromises();
    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenLastCalledWith(types.QUESTION_SAVED, undefined);
  });
});

describe('vote action', () => {
  let commit;
  beforeAll(() => {
    commit = jest.fn();
  });

  beforeEach(() => {
    vote({
      commit,
    }, {});
  });

  it('should dispatch a loading action', () => {
    expect(commit).toHaveBeenCalledWith(types.BTN_LOADING);
  });

  it('on succesful question save, a commit should be triggered', async () => {
    await flushPromises();
    expect(commit).toHaveBeenLastCalledWith(types.VOTE, { response: undefined, data: {} });
  });
});
