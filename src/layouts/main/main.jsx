import PropTypes from 'prop-types';

import Container from '@/components/container';
import * as S from './main.styles';

const Main = ({ children }) => {
  return (
    <S.Wrapper>
      {children}

      <S.Footer>
        <Container>
          <S.FooterText>
            Created by <a href="https://twitter.com/remvze">Maze ✱</a>
          </S.FooterText>
        </Container>
      </S.Footer>
    </S.Wrapper>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
