import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  position: sticky;
  top: 20px;
  z-index: 10;
`;

export const List = styled.ul`
  display: inline-flex;
  border-radius: 100px;
  list-style: none;
  background-color: rgba(8, 8, 8, 0.4);
  backdrop-filter: blur(5px);
  gap: 5px;
`;

export const Item = styled.li`
  display: inline-block;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  text-transform: uppercase;
  padding: 3px 10px;
  border-radius: 100px;
  font-weight: 600;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: transparent;
  transition: 0.4s;

  &.active {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: #222;
  }
`;
