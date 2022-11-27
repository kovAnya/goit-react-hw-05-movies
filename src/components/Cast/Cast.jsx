import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../api/fetchApi';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      const movieCast = await getMovieCast(movieId);
      setMovieCast(movieCast);
    };
    getCast();
  }, [movieId]);

  const proceedImg = path => {
    const imgUrl = path
      ? `https://image.tmdb.org/t/p/w300/${path}`
      : 'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';
    return imgUrl;
  };

  return (
    <ul>
      {movieCast.map(movie => {
        return (
          <li key={movie.id}>
            <img src={proceedImg(movie.profile_path)} alt="" width="100" />
            <p>{movie.name}</p>
            <p>Character: {movie.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
