import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../api/fetchApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    setErrorMessage(false);
    const getReviews = async () => {
      const filmRewiews = await getMovieReviews(movieId);
      if (filmRewiews.length === 0) {
        setErrorMessage(true);
      }
      setReviews(filmRewiews);
    };

    getReviews();
  }, [movieId]);

  return (
    <div>
      {errorMessage && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              Author: {review.author} <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
