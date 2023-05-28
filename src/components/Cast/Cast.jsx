import { useParams } from 'react-router-dom';
import { getCastById } from '../../services/API';
import { useEffect, useState } from 'react';
import { CastItem, CastList } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const getCastMovie = async movieId => {
      try {
        setIsLoading(true);
        const { cast } = await getCastById(movieId);
        setCastMovie(cast);
        console.log(cast);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCastMovie(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading ?? <Loader />}
      <h2>Cast</h2>
      {castMovie.length ? (
        <CastList>
          {castMovie.map(actor => (
            <CastItem key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                <img
                  src={`https://dummyimage.com/200x300/f2eaf2/34343b.jpg&text=No+image`}
                  alt={actor.name}
                />
              )}
              <h3>{actor.name}</h3>
              <p>Character: {actor.character}</p>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <p>We don't have any information about the cast yet.</p>
      )}
    </div>
  );
};

export default Cast;
