import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text[1]};
  background-color: ${({ theme }) => theme.colors.background[3]};
`;
