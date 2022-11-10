import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text[900]};
  background-color: ${({ theme }) => theme.colors.background[700]};
`;
