import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  line-height: 0;
`;

export const Box = styled.div`
  display: inline-flex;
  width: 17px;
  height: 17px;
  border: 2px solid ${({ theme }) => theme.border.alpha};
  border-radius: var(--border-radius-m);
  cursor: pointer;
  background-color: ${({ theme }) => theme.bg.alpha};
  transition: 0.4s;
  font-size: 13px;
  align-items: center;
  justify-content: center;

  &.checked {
    border-color: rgb(var(--color-primary));
    background-color: rgb(var(--color-primary));
    box-shadow: 0 4px 10px rgba(var(--color-primary), 0.3);
  }

  & span {
    opacity: 0;
    transition: 0.4s;
  }

  &.checked span {
    opacity: 1;
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
