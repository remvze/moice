import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled(motion.h1)`
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Desc = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;
