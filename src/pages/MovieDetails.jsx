import { Suspense, useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from '../services/API';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { Loader } from 'components/Loader/Loader';
import { LinkItem, ListItem } from 'components/MovieList/MovieList.styled';
import {
  GoBackLink,
  InfoCard,
  MovieCard,
  MovieInfo,
  MovieStyled,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { title, release_date, poster_path, vote_average, overview, genres } =
    selectedMovie;
  const releaseDate = new Date(release_date);
  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();
  const location = useLocation();
  const baclLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getSelectedMovie = async movieId => {
      try {
        setIsLoading(true);
        setError(null);
        const movieData = await getMovieById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        setError(error.message);
      }
    };
    getSelectedMovie(movieId);
  }, [movieId]);

  const posterPathUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : `https://dummyimage.com/400x600/f2eaf2/34343b.jpg&text=Poster+not+available`;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated yet';
  console.log(baclLinkRef);
  return (
    <MovieStyled>
      <GoBackLink to={baclLinkRef.current}>
        <HiArrowNarrowLeft style={{ width: '25px', height: '25px' }} />
        Go back
      </GoBackLink>
      <MovieCard>
        <img src={posterPathUrl} alt={`poster ${title}`} />
        <MovieInfo>
          <h2>
            {title ?? 'Unknown'} ({releaseYear})
          </h2>
          <p>User Score: {userScore}</p>
          <h3>Overview</h3>
          <p>{overview}</p>

          {genres && genres.length > 0 && (
            <div>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(',')}</p>
            </div>
          )}
        </MovieInfo>
      </MovieCard>
      <InfoCard>
        <h3>Additional information</h3>
        <ul>
          <ListItem>
            <LinkItem to="cast">Cast</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to="reviews">Reviews</LinkItem>
          </ListItem>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </InfoCard>
    </MovieStyled>
  );
};

export default MovieDetails;
