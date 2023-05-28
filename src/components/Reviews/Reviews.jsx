import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/API';
import { useEffect, useState } from 'react';
import { ReviewTitle } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviewsMovie = async movieId => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await getReviews(movieId);
        setReviews(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviewsMovie(movieId);
  }, [movieId]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <ReviewTitle> Author: {review.author}</ReviewTitle>{' '}
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
