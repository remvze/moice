import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  color: ${({ theme }) => theme.fg.beta};
  font-size: var(--font-s);
`;
