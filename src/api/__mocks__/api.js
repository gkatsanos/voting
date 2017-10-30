const getUrl = jest.fn(() => Promise.resolve());

const fetchItems = jest.fn((url, page = 1) => {
  if (url) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('fail'));
});

const vote = jest.fn(() => Promise.resolve());

const saveQuestion = jest.fn(() => Promise.resolve());

export default {
  fetchItems, vote, getUrl, saveQuestion,
};
