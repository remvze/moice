import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 15px;
`;

export const Icon = styled.span`
  display: inline-block;
  margin-right: 5px;
`;
