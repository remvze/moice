import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-snackbar);
  width: 80%;
  display: flex;
  justify-content: center;
`;

export const Snackbar = styled(motion.div)`
  padding: 10px 15px;
  border-radius: var(--border-radius-m);
  font-size: var(--font-s);
  background-color: ${({ theme }) => theme.bg.gamma};
`;

export const SnackbarContent = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.div`
  line-height: 0;
  margin-right: 8px;
  color: ${({ $color, theme }) => $color || theme.fg.alpha};
  font-size: 16px;
`;

export const Text = styled.p`
  flex-grow: 1;

  ${({ $withButton }) =>
    $withButton &&
    css`
      padding-right: 10px;
      border-right: ${({ theme }) => `2px solid ${theme.border.alpha}`};
    `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.fg.beta};
  border: none;
  outline: none;
  font-size: var(--font-xxxs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 10px;
`;
