import styled from 'styled-components';
import { Reorder } from 'framer-motion';

export const Section = styled.section`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Label = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
`;

export const List = styled(Reorder.Group)`
  list-style: none;
`;
