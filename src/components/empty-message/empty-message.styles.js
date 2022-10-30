import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;
