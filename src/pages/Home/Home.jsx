import { useState, useEffect } from 'react';
import { fetchApi } from '../../api/fetchApi';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import * as SC from './Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await fetchApi();
        setMovies(movies);
      } catch (error) {}
    };
    fetchTrendingMovies();
  }, []);

  return (
    <SC.Container>
      <h1>Trending today:</h1>
      <MoviesList movies={movies} />
    </SC.Container>
  );
};
export default Home;
