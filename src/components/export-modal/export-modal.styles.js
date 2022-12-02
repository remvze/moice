import styled from 'styled-components';

import UnstyledButton from '@/components/button';

export const Textarea = styled.textarea.attrs({ readOnly: true })`
  width: 100%;
  height: 150px;
  resize: none;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.bg.gamma};
  color: ${({ theme }) => theme.fg.alpha};
  font-size: var(--font-s);
  padding: 10px;
  border: none;
  outline: none;
  border-radius: var(--border-radius-m);
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(UnstyledButton)`
  background-color: rgb(var(--gradient-blue-single));
  background-image: linear-gradient(45deg, var(--gradient-blue));
  box-shadow: 0 6px 12px rgba(var(--gradient-blue-single), 0.15);
`;
