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
  border-radius: 5px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.darker};
`;
