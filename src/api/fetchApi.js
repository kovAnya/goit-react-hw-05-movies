import axios from 'axios';

const APIKEY = '55e26443229e40ea5b05d468ef0985eb';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchApi = async () => {
  const TrendingMovies = await axios.get(`/trending/all/day?api_key=${APIKEY}`);
  return TrendingMovies.data.results;
};

export const searchMovies = async name => {
  const results = await axios.get(
    `/search/movie?api_key=${APIKEY}&query=${name}&language=en-US&page=1&include_adult=false`
  );
  return results.data.results;
};

export const getMovieDetails = async id => {
  const currentMovie = await axios.get(
    `/movie/${id}?api_key=${APIKEY}&language=en-US`
  );
  return currentMovie.data;
};

export const getMovieCast = async id => {
  const cast = await axios.get(
    `movie/${id}/credits?api_key=${APIKEY}&language=en-US`
  );
  return cast.data.cast;
};

export const getMovieReviews = async id => {
  const reviews = await axios.get(
    `/movie/${id}/reviews?api_key=${APIKEY}&language=en-US&page=1`
  );
  return reviews.data.results;
};
