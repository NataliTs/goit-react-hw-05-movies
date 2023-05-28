import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/API';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results } = await getTrendingMovies();
        setTrendMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendMovies();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong... Try reloading the page</p>
      ) : (
        <MovieList movies={trendMovies} title={'Tranding today'} />
      )}
    </>
  );
};

export default Home;
