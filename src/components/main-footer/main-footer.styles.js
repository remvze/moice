import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Footer = styled.footer`
  margin-top: auto;
  padding: 25px 0;
  overflow: hidden;
`;

export const FooterText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text[800]};
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  a {
    color: ${({ theme }) => theme.colors.text[900]};
  }
`;
