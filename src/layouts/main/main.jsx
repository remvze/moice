import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import Container from '@/components/container';
import logo from '@/assets/logo.svg';
import * as S from './main.styles';

const Main = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Header
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 2,
          },
        }}
      >
        <S.HeaderContainer large>
          <Link to="/">
            <S.Logo src={logo} alt="Moice Logo" />
          </Link>

          <S.HeaderLink
            href="https://github.com/remvze/moice"
            target="_blank"
            rel="noreferrer"
          >
            GitHub{' '}
            <span>
              <FaGithub />
            </span>
          </S.HeaderLink>
        </S.HeaderContainer>
      </S.Header>

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
