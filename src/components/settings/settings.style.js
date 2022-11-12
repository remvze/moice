import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: var(--z-settings);
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: var(--z-settings-overlay);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bg.gamma};
  color: ${({ theme }) => theme.fg.alpha};
  transition: 0.4s;
  opacity: ${({ $active }) => ($active ? '1' : '0.5')};

  &:hover {
    opacity: 1;
  }
`;

export const Items = styled(motion.div)`
  position: absolute;
  bottom: calc(100% + 15px);
  right: 0;
  min-width: 200px;
  padding: 5px;
  background-color: ${({ theme }) => theme.bg.beta};
  border-radius: var(--border-radius-m);
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: var(--border-radius-m);
  transition: 0.4s;
  color: ${({ theme }) => theme.fg.beta};

  &:hover {
    background-color: ${({ theme }) => theme.bg.gamma};
    color: ${({ theme }) => theme.fg.alpha};
  }
`;

export const ItemIcon = styled.div`
  line-height: 0;
  font-size: 16px;
  width: 25px;
  text-align: left;
  color: ${({ theme }) => theme.fg.alpha};
`;

export const ItemLabel = styled.p`
  font-size: var(--font-xs);
  line-height: 0;
`;
