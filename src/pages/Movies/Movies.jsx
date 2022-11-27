import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/fetchApi';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import * as SC from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setErrorMessage(false);
    const searchValue = searchParams.get('query');
    if (!searchValue) {
      setMovies([]);
      return;
    }

    const fetchSearchedMovies = async () => {
      try {
        const searchResult = await searchMovies(searchValue);
        setMovies(searchResult);
        if (searchResult.length === 0) {
          setErrorMessage(true);
        }
      } catch (error) {
        setErrorMessage(true);
      }
    };
    fetchSearchedMovies();
  }, [searchParams]);

  const updateString = query => {
    const newQuery = query !== '' ? { query } : {};
    setSearchParams(newQuery);
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateString(e.target.elements.input.value);
  };

  return (
    <main>
      <SC.Form onSubmit={handleSubmit}>
        <SC.Searchbar
          type="text"
          name="input"
          placeholder="Enter the keywords"
        />
        <SC.Btn type="submit">Search</SC.Btn>
      </SC.Form>
      {errorMessage && <p>No results on this query</p>}
      {movies && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
