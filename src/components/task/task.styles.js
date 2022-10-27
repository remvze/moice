import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Reorder } from 'framer-motion';

import UnstyledCheckbox from '@/components/checkbox';

export const Wrapper = styled(Reorder.Item)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Drag = styled.div`
  height: 20px;
  width: 15px;
  margin-right: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: grab;

  div {
    content: '';
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.darker};
    border-radius: 50px;

    &:not(:first-child) {
      margin-top: 3px;
    }
  }
`;

export const Pinned = styled.div`
  margin-right: 8px;
  font-size: 18px;
  line-height: 0;
  color: ${({ theme }) => theme.colors.text.dark};
  cursor: pointer;
  transition: color 0.4s;

  &.pinned {
    color: #fecd6d;
  }
`;

export const Checkbox = styled(UnstyledCheckbox)`
  margin-right: 10px;
`;

export const Text = styled(TextareaAutosize)`
  border: 0;
  outline: 0;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.4s;

  ${props =>
    props.$done &&
    css`
      color: ${({ theme }) => theme.colors.text.secondary};
      text-decoration: line-through;
    `}
`;
