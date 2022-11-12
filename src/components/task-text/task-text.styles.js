import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Text = styled(TextareaAutosize)`
  border: 0;
  outline: 0;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  color: ${({ theme }) => theme.fg.alpha};
  transition: color 0.4s;
  overflow: hidden;

  ${props =>
    props.$done &&
    css`
      color: ${({ theme }) => theme.fg.beta};
      text-decoration: line-through;
    `}
`;
