import { useLocation } from 'react-router-dom';
import { List, ListItem, Title, LinkItem } from './MovieList.styled';

export const MovieList = ({ movies, title }) => {
  const location = useLocation();
  return (
    <section>
      {title && <Title>{title}</Title>}

      <List>
        {movies.map(movie => (
          <ListItem key={movie.id}>
            <LinkItem to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </LinkItem>
          </ListItem>
        ))}
      </List>
    </section>
  );
};
