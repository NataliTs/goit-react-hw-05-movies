import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
  padding: 8px;
  font-size: 20px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-right: 16px;
  border: ${p => p.theme.border};
  border-radius: 5px;
  min-width: 300px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border: ${p => p.theme.border};
  border-radius: 5px;
  align-items: center;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.acentBgcolor};
    color: #ffffff;
`;

export const InfoText = styled.p`
  padding: 8px;
  font-size: 24px;
  text-align: center;
`;
