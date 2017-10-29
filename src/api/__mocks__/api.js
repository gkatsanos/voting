const getUrl = jest.fn(() => Promise.resolve());

const fetchItems = jest.fn(() => Promise.resolve({}));

const vote = jest.fn(() => Promise.resolve());

const saveQuestion = jest.fn(() => Promise.resolve());

export default {
  fetchItems, vote, getUrl, saveQuestion,
};
