import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 80%;
  max-width: ${({ $large, $small }) =>
    $large ? '900px' : $small ? '500px' : '800px'};
  margin: 0 auto;
`;

export const MotionContainer = styled(motion.div)`
  width: 80%;
  max-width: ${({ $large, $small }) =>
    $large ? '750px' : $small ? '450px' : '600px'};
  margin: 0 auto;
`;
