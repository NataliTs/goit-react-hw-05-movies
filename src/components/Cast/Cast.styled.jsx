import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  margin-top: 12px;
`;

export const CastItem = styled.li`
  width: calc((100% - 196px) / 5);
  height: 400px;
  word-wrap: break-word;
`;
