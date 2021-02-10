import axios from 'axios';

export async function fetchTweet() {
  return await axios
    .get('https://musk-tweet.netlify.app/.netlify/functions/api')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });
}
