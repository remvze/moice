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
      background-color: ${({ theme }) => theme.bg.accent.critical};
      background-image: ${({ theme }) =>
        `linear-gradient(45deg, ${theme.gradient.critical})`};
      box-shadow: 0 6px 12px rgba(254, 81, 150, 0.15);
    `}

  ${({ $neutral }) =>
    $neutral &&
    css`
      background-color: ${({ theme }) => theme.bg.accent.primary};
      background-image: ${({ theme }) =>
        `linear-gradient(45deg, ${theme.gradient.primary})`};
      box-shadow: 0 6px 12px rgba(9, 107, 255, 0.15);
    `}
`;
