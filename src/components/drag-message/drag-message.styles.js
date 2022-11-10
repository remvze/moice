import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.text[800]};
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: inline-block;
  margin-right: 5px;
  line-height: 0;
`;
