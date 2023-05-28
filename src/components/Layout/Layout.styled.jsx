import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 20px 0;
  margin-bottom: 16px;
  box-shadow: ${p => p.theme.boxShadow}
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  font-size: 26px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: ${p => p.theme.colors.acentText};
    text-decoration: underline;
  }
`;
