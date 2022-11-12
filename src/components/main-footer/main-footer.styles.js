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
