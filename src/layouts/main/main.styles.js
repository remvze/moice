import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 20px 0;
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  a {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
