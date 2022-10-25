import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

import UnstyledCheckbox from '@/components/checkbox';

export const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const Checkbox = styled(UnstyledCheckbox)`
  margin-right: 10px;
`;

export const Text = styled(TextareaAutosize)`
  border: 0;
  outline: 0;
  flex-grow: 1;
  resize: none;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.4s;

  ${props =>
    props.done &&
    css`
      color: ${({ theme }) => theme.colors.text.secondary};
      text-decoration: line-through;
    `}
`;
