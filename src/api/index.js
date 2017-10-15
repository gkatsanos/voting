import axios from 'axios';

axios.defaults.baseURL = 'https://polls.apiblueprint.org/';

const getUrl = () => (
  axios('/')
    .then(response => response.data.questions_url)
    .catch((err) => {
      throw err;
    })
);

const fetchItems = (url, page = 1) => (
  axios(url, { params: { page } })
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

const vote = url => (
  axios.post(url)
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

const saveQuestion = (url, data) => (
  axios.post(url, data)
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

export default { fetchItems, vote, getUrl, saveQuestion };
