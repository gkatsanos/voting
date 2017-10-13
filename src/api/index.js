import axios from 'axios';

const fetchItems = () => (
  axios('https://polls.apiblueprint.org/questions/')
    .then(response => response.data)
    .catch((err) => {
      throw err;
    })
);

export default { fetchItems };
