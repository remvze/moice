import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  line-height: 1;
  margin-bottom: 5px;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => `calc(${theme.fontSize.xl} - 2px)`};
`;

export const Desc = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text[2]};
`;
