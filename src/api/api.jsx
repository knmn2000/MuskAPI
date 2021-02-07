import axios from 'axios';

export async function fetchTweet() {
  return await axios
    .get('http://127.0.0.1:5000/random')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}
