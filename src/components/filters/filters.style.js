import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  position: sticky;
  top: 20px;
  z-index: var(--z-filters);

  @media (min-width: 800px) {
    width: 200px;
    max-width: 200px;
    padding-right: 20px;
    position: static;
  }
`;

export const List = styled.ul`
  display: inline-flex;
  border-radius: 100px;
  list-style: none;
  background-color: rgba(8, 8, 8, 0.4);
  backdrop-filter: blur(5px);
  gap: 5px;

  @media (min-width: 800px) {
    display: block;
    margin-bottom: 20px;
    position: sticky;
    top: 20px;
  }
`;

export const Item = styled.li`
  display: inline-block;

  @media (min-width: 800px) {
    display: block;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text[2]};
  background-color: transparent;
  transition: 0.4s;

  &.active {
    padding-left: 22px;
    color: ${({ theme }) => theme.colors.text[1]};
    background-color: ${({ theme }) => theme.colors.background[3]};
  }

  @media (min-width: 800px) {
    display: flex;
    width: 100%;
    text-align: left;
    justify-content: flex-start;
    padding: 10px;
    border-radius: ${({ theme }) => theme.borderRadius.m};

    &.active {
      padding-left: 20px;
      background-color: ${({ theme }) => theme.colors.background[2]};
    }
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

  @media (min-width: 800px) {
    width: 3px;
    height: 100%;
    left: 0;
    border-radius: 0;
    background-image: linear-gradient(45deg, #ff0844, #ff693b);
    z-index: 2;
  }
`;
