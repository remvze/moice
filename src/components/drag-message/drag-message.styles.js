import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Message = styled(motion.p)`
  font-size: var(--font-s);
  color: ${({ theme }) => theme.fg.beta};
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: inline-block;
  margin-right: 5px;
  line-height: 0;
`;
