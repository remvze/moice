import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import { Reorder } from 'framer-motion';

import UnstyledCheckbox from '@/components/checkbox';

export const Wrapper = styled(Reorder.Item)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 100%;
    width: 50px;
    height: 100%;
    background-color: transparent;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
`;

export const Pinned = styled.div`
  margin-right: 10px;
  font-size: 18px;
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
