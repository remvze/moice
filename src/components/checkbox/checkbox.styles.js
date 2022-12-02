import styled, { css } from 'styled-components';

export const Container = styled.label`
  position: relative;
  line-height: 0;
`;

export const Box = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid ${({ theme }) => theme.border.alpha};
  border-radius: var(--border-radius-m);
  cursor: pointer;
  background-color: ${({ theme }) => theme.bg.alpha};
  transition: box-shadow 0.4s;

  &.checked {
    border: 0;
    transition: 0.4s;

    ${({ $celebrate }) =>
      $celebrate
        ? css`
            background-color: rgb(var(--gradient-green-single));
            background-image: linear-gradient(45deg, var(--gradient-green));
            box-shadow: 0 4px 10px rgba(var(--gradient-green-single), 0.3);
          `
        : css`
            background-color: rgb(var(--gradient-purple-single));
            background-image: linear-gradient(45deg, var(--gradient-purple));
            box-shadow: 0 4px 10px rgba(var(--gradient-purple-single), 0.3);
          `}
  }
`;

export const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  top: 0;
  left: 0;
  visibility: hidden;
`;
