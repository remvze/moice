import styled from 'styled-components';
import { Reorder } from 'framer-motion';

export const Section = styled.section`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const List = styled(Reorder.Group)`
  list-style: none;
`;
