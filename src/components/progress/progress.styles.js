import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
`;

export const Bar = styled.div`
  height: 4px;
  width: 100vw;
  background-color: ${({ theme }) => theme.bg.gamma};
  overflow: hidden;

  .done {
    height: 100%;
    transition: 0.4s;
    background-color: rgb(var(--color-secondary));
  }
`;

export const Percent = styled.p`
  margin: 0 0 2px 15px;
  font-size: var(--font-xs);
  color: ${({ theme }) => theme.fg.beta};
`;
