import styled from 'styled-components';
import { Link as UnstyledLink } from 'react-router-dom';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: var(--font-xxs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: var(--border-radius-m);
  border: none;
  outline: none;
  color: ${({ theme }) => theme.fg.alpha};
  background-color: ${({ theme }) => theme.bg.gamma};
`;

export const Link = styled(UnstyledLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: var(--font-xxs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: var(--border-radius-m);
  border: none;
  outline: none;
  color: ${({ theme }) => theme.fg.alpha};
  background-color: ${({ theme }) => theme.bg.gamma};
`;
