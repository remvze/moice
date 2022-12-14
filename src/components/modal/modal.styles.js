import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '@/components/container';

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(8, 8, 8, 0.4);
  backdrop-filter: blur(5px);
  z-index: var(--z-modal-overlay);
`;

export const Modal = styled(motion.div)`
  position: fixed;
  z-index: var(--z-modal);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-height: 100%;
  padding: 50px 0;
  overflow-y: auto;

  header {
    font-size: var(--font-l);
    font-weight: 700;
    font-family: var(--font-heading);
  }
`;

export const Content = styled(Container).attrs({ small: true })`
  background-color: ${({ theme }) => theme.bg.beta};
  padding: 20px;
  border-radius: var(--border-radius-m);
  position: relative;
`;

export const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme }) => theme.fg.beta};
  font-size: 16px;
`;
