import styled, { css } from 'styled-components';

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const Message = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.text.primary};

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  ${({ $cancel }) =>
    $cancel &&
    css`
      background-color: ${({ theme }) => theme.colors.darker};
    `}

  ${({ $confirm }) =>
    $confirm &&
    css`
      background-color: #e35d5b;
      background-image: linear-gradient(45deg, #e35d5b, #e53935);
    `}
`;
