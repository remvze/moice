import styled from 'styled-components';
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
  margin-right: 5px;
  color: ${({ $color, theme }) => $color || theme.fg.alpha};
  font-size: 16px;
`;

export const Text = styled.p`
  flex-grow: 1;
`;
