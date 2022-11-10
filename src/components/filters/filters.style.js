import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  position: sticky;
  top: 20px;
  z-index: var(--z-filters);
`;

export const List = styled.ul`
  display: inline-flex;
  border-radius: 100px;
  list-style: none;
  background-color: rgba(8, 8, 8, 0.4);
  backdrop-filter: blur(5px);
  gap: 5px;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text[800]};
  background-color: transparent;
  transition: 0.4s;

  &.active {
    padding-left: 22px;
    color: ${({ theme }) => theme.colors.text[900]};
    background-color: #222;
  }
`;

export const Dot = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #ff0844;
  background-image: linear-gradient(45deg, #ff0844, #ffb199);
`;
