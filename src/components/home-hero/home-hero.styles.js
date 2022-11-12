import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.section`
  margin-bottom: 40px;

  @media (min-width: 800px) {
    margin-bottom: 60px;
  }
`;

export const Title = styled(motion.h1)`
  font-size: var(--font-xl);
  font-weight: 600;
  font-family: var(--font-display);
  line-height: 1;
`;

export const Emoji = styled.span`
  font-size: ${({ theme }) => `calc(${theme.fontSize.xl} - 4px)`};
`;

export const Desc = styled(motion.p)`
  color: ${({ theme }) => theme.fg.beta};
`;
