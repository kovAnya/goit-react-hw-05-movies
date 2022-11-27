import { Link, useLocation } from 'react-router-dom';
import * as SC from './MoviesListItem.styled';
import PropTypes from 'prop-types';

export const MoviesListItem = ({ title, name, id }) => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'movies' : location.pathname;

  return (
    <SC.Movie>
      <Link to={`${currentPage}/${id}`} state={{ from: location }}>
        {title ?? name}
      </Link>
    </SC.Movie>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};
