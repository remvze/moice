import styled from 'styled-components';
import { Reorder } from 'framer-motion';

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const List = styled(Reorder.Group)`
  list-style: none;
`;

export const Tasks = styled.div`
  @media (min-width: 800px) {
    flex-grow: 1;
  }
`;
