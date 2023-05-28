import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`text-decoration: none;
display: flex;
font-size: 20px;
font-weight: 500;
padding: 4px 24px;

color: ${p => p.theme.colors.text};
  &:active{
    color: ${p => p.theme.colors.acentText};
    `;

export const MovieCard = styled.section`
  display: flex;
  padding: 0 24px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 24px;
`;

export const MovieStyled = styled.div`
  padding: 8px 24px;
`;

export const InfoCard = styled.div`
  padding: 12px 24px;
`;
