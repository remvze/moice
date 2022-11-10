import styled, { css } from 'styled-components';

import UnstyledButton from '@/components/button';

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.text[2]};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
`;

export const Button = styled(UnstyledButton)`
  &:not(:last-of-type) {
    margin-right: 10px;
  }

  ${({ $cancel }) =>
    $cancel &&
    css`
      background-color: ${({ theme }) => theme.colors.background[4]};
    `}

  ${({ $confirm }) =>
    $confirm &&
    css`
      background-color: #e35d5b;
      background-image: linear-gradient(45deg, #e35d5b, #e53935);
    `}
`;
