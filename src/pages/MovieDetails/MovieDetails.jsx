import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api/fetchApi';
import { BackLinkBtn } from '../../components/BackLinkBtn/BackLinkBtn';
import * as SC from './MovieDetails.styled';

const MovieDetails = () => {
  const [currentMovie, setCurrentMovie] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const { movieId } = useParams();
  const baseUrl = 'https://image.tmdb.org/t/p/w300';
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    setErrorMessage(false);
    const movieDetails = async () => {
      try {
        const currentMovieDetails = await getMovieDetails(movieId);
        setCurrentMovie(currentMovieDetails);
      } catch (error) {
        setErrorMessage(true);
      }
    };
    movieDetails();
  }, [movieId]);

  const proceedTitle = () => {
    const title = currentMovie.title ?? currentMovie.name;
    return title;
  };

  const proceedUserScore = () => {
    if (currentMovie) {
      return Math.round(currentMovie.vote_average * 10);
    }
  };

  const proceedGenres = () => {
    if (currentMovie) {
      const genres = currentMovie.genres.map(genre => {
        return genre.name;
      });
      return genres.join(' ');
    }
  };

  const proceedImgUrl = path => {
    const url = path
      ? baseUrl + path
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';
    return url;
  };

  return (
    <SC.Container>
      <BackLinkBtn path={backLink} />
      {errorMessage && <p>Failed to load movie details</p>}
      {currentMovie && (
        <>
          <SC.MovieInfo>
            <img
              src={proceedImgUrl(currentMovie.poster_path)}
              alt={proceedTitle()}
              width="300"
            />
            <div>
              <h1>{proceedTitle()}</h1>
              <p>User score: {proceedUserScore()}%</p>
              <h2>Overview</h2>
              <p>{currentMovie.overview}</p>
              <h2>Genres</h2>
              {proceedGenres()}
            </div>
          </SC.MovieInfo>
          <div>
            <SC.AdditionalInfo>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast" state={location.state}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={location.state}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </SC.AdditionalInfo>
            <Suspense fallback={<div>Loading in progress...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </SC.Container>
  );
};

export default MovieDetails;
