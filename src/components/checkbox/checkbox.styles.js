import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  line-height: 0;
`;

export const Box = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid #888;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};
  transition: box-shadow 0.4s;

  &.checked {
    border: 0;
    background-color: #b6e388;
    background-image: linear-gradient(45deg, #b6e388, #c7f2a4);
    box-shadow: 0 4px 10px rgb(182, 227, 136, 0.44);
  }
`;

export const Input = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  overflow: hidden;
  top: 0;
  left: 0;
`;
