import axios from 'axios';
export default axios.create({
  bseURL: 'https://newsapi.org/v2/',
});

// https://newsapi.org/v2/everything?q=tesla&from=2022-04-11&sortBy=publishedAt&apiKey=3e7d2ff21a9b42398479c940305802ca
