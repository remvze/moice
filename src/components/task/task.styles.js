import styled from 'styled-components';
import { Reorder } from 'framer-motion';

export const Wrapper = styled(Reorder.Item)`
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  user-select: none;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;
