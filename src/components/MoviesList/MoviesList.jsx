import { MoviesListItem } from '../MoviesListItem/MoviesListItem';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesListItem
          key={movie.id}
          title={movie.title}
          name={movie.name}
          id={movie.id}
        />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};
