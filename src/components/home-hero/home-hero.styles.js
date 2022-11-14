import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  font-size: calc(var(--font-xl) - 4px);
`;

export const Desc = styled(motion.p)`
  color: ${({ theme }) => theme.fg.beta};
`;

export const About = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  line-height: 0;
  color: ${({ theme }) => theme.fg.alpha};
  font-size: var(--font-xs);
  margin-top: 5px;
  font-weight: 600;

  span {
    display: inline-block;
    margin-left: 3px;
  }
`;
