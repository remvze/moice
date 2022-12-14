import styled, { css } from 'styled-components';

import UnstyledButton from '@/components/button';

export const Message = styled.p`
  color: ${({ theme }) => theme.fg.beta};
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
      background-color: ${({ theme }) => theme.bg.delta};
    `}

  ${({ $confirm }) =>
    $confirm &&
    css`
      background-color: rgb(var(--color-critical-500));
      box-shadow: 0 6px 12px rgba(var(--color-critical-500), 0.25);
    `}

  ${({ $neutral }) =>
    $neutral &&
    css`
      background-color: rgb(var(--color-primary));
      box-shadow: 0 6px 12px rgba(var(--color-primary), 0.25);
    `}
`;
