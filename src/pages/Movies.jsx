import { useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from '../services/API';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Button, Form, Input, InfoText } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const fetchMovieSearch = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieBySearch(query);
        setMovies(results);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieSearch();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movies" />

        <Button type="submit">Search</Button>
      </Form>
      {isLoading && <Loader />}
      {!query ? (
        <InfoText>Please enter something</InfoText>
      ) : movies.length === 0 && query !== '' ? (
        <InfoText>Nothing found. Try to refine the request</InfoText>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Movies;
