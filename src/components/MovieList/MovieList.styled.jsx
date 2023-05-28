import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  padding: 8px;
`;

export const List = styled.ul`
  padding-left: 88px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;

  &:hover,
  &:focus  {
    color: ${p => p.theme.colors.acentText}
    
`;
