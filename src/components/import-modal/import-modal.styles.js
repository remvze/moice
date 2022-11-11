import styled from 'styled-components';

import UnstyledButton from '@/components/button';

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.background[3]};
  color: ${({ theme }) => theme.colors.text[1]};
  font-size: ${({ theme }) => theme.fontSize.s};
  padding: 10px;
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.m};
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(UnstyledButton)`
  background-color: #096bff;
  background-image: linear-gradient(45deg, #096bff, #35aaff);
  box-shadow: 0 6px 12px rgba(9, 107, 255, 0.15);
`;
