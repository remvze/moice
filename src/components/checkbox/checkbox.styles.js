import styled, { css } from 'styled-components';

export const Container = styled.label`
  position: relative;
  line-height: 0;
`;

export const Box = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid ${({ theme }) => theme.colors.border[1]};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background[1]};
  transition: box-shadow 0.4s;

  &.checked {
    border: 0;
    transition: 0.4s;

    ${({ $celebrate }) =>
      $celebrate
        ? css`
            background-color: #81fbb8;
            background-image: linear-gradient(45deg, #81fbb8, #28c76f);
            box-shadow: 0 4px 10px rgba(129, 251, 184, 0.3);
          `
        : css`
            background-color: #096bff;
            background-image: linear-gradient(45deg, #096bff, #35aaff);
            box-shadow: 0 4px 10px rgba(9, 107, 255, 0.3);
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
