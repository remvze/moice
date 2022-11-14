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
  background-color: ${({ theme }) => theme.bg.accent.primary};
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.gradient.primary})`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-weight: 600;
  text-transform: uppercase;
  font-size: var(--font-xxs);
  letter-spacing: 1px;
  margin-top: 10px;

  span {
    font-size: calc(var(--font-xxs) + 4px);
    color: #35aaff;
  }
`;
