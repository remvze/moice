import styled from 'styled-components';

import UnstyledButton from '@/components/button';

export const Textarea = styled.textarea.attrs({ readOnly: true })`
  width: 100%;
  height: 150px;
  resize: none;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.darker};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

export const ButtonContainer = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(UnstyledButton)`
  background-color: #8f94fb;
  background-image: linear-gradient(45deg, #8f94fb, #4e54c8);
`;