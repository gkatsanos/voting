import * as types from '@/store/mutation-types';
import api from '@/api';
import { fetchItems } from '../actions';

jest.mock('@api');

describe('actions', () => {
  let state;
  let commit;
  let dispatch;
  beforeAll(() => {
    commit = jest.fn();
    dispatch = jest.fn();
    state = {
      apiEntryPoint: '',
      nextPage: 0,
    };
  });

  beforeEach(() => {
    fetchItems({
      commit,
      dispatch,
      state,
    });
  });

  it('should call a commit before fetching', () => {
    expect(commit).toHaveBeenCalledWith(types.PRE_HTTP_REQUEST);
  });

  it('should call receiveItems after succesful fetch', () => {
    setTimeout(() => {
      expect(dispatch).toHaveBeenCalledWith('receiveItems', {});
    });
  });

  it('should call a fail commit if request fails', () => {
    api.fetchItems = jest.fn(() => Promise.reject());
    setTimeout(() => {
      expect(commit).toHaveBeenCalledWith(types.FETCHED_ADS_FAIL);
    });
  });
});
