import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  color: ${({ theme }) => theme.fontSize.s};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
