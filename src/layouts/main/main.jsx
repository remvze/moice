import PropTypes from 'prop-types';

import Container from '@/components/container';
import * as S from './main.styles';

const Main = ({ children }) => {
  return (
    <S.Wrapper>
      {children}

      <S.Footer>
        <Container>
          <S.FooterText
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                delay: 2,
              },
            }}
          >
            Created by{' '}
            <a
              href="https://twitter.com/remvze"
              target="_blank"
              rel="noreferrer"
            >
              Maze ✱
            </a>
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
