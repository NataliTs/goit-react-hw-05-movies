import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5de976d9fa7c36b2117f7a9c7cc0a525';
const TRENDING_PARAM = '/trending/all/day';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}${TRENDING_PARAM}?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCastById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieBySearch = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
