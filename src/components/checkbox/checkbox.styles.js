import styled, { css } from 'styled-components';

export const Container = styled.label`
  position: relative;
  line-height: 0;
`;

export const Box = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid ${({ theme }) => theme.colors.border[900]};
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background[900]};
  transition: box-shadow 0.4s;

  &.checked {
    border: 0;
    transition: 0.4s;

    ${({ $celebrate }) =>
      $celebrate
        ? css`
            background-color: #9be15d;
            background-image: linear-gradient(45deg, #9be15d, #00e3ae);
            box-shadow: 0 4px 10px rgba(0, 227, 174, 0.45);
          `
        : css`
            background-color: #00c6fb;
            background-image: linear-gradient(45deg, #00c6fb, #005bea);
            box-shadow: 0 4px 10px rgba(0, 91, 234, 0.5);
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
