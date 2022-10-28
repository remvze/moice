import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const Code = styled.h2`
  font-size: 60px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const Message = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
