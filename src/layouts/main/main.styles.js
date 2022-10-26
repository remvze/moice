import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  min-height: calc((var(--vh, 1vh) * 100));
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 20px 0;
  overflow: hidden;
`;

export const FooterText = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
