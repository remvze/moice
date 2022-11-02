import styled, { css } from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const Text = styled(TextareaAutosize)`
  border: 0;
  outline: 0;
  flex-grow: 1;
  resize: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: color 0.4s;
  overflow: hidden;

  ${props =>
    props.$done &&
    css`
      color: ${({ theme }) => theme.colors.text.secondary};
      text-decoration: line-through;
    `}
`;
