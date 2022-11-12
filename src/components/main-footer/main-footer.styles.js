import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Footer = styled.footer`
  margin-top: auto;
  padding: 25px 0;
  overflow: hidden;
`;

export const FooterText = styled(motion.p)`
  color: ${({ theme }) => theme.fg.beta};
  text-align: center;
  font-size: var(--font-xs);
  font-weight: 600;

  a {
    color: ${({ theme }) => theme.fg.alpha};
  }
`;

export const Logo = styled.span`
  background-color: #ffaf7b;
  background-image: linear-gradient(45deg, #a770ef, #cf8bf3, #ffaf7b);
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
