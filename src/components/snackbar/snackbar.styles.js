import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Snackbar = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--z-snackbar);
  max-width: 450px;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.darker};
`;
