import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-bottom: 40px;
`;

export const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 600;
  font-family: 'Newsreader', serif;
  line-height: 1;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => `calc(${theme.fontSize.xl} - 4px)`};
`;

export const Desc = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text[2]};
`;
