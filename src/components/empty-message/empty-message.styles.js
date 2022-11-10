import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text[800]};
  font-size: ${({ theme }) => theme.fontSize.s};
`;
