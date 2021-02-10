import axios from 'axios';

export async function fetchTweet() {
  return await axios
    .get('http://localhost:9000/.netlify/functions/api')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}
