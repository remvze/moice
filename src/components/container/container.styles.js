import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  max-width: ${({ $large }) => ($large ? '750px' : '600px')};
  margin: 0 auto;
`;
