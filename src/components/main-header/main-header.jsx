import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import logo from '@/assets/logo.svg';
import * as S from './main-header.styles';

const MainHeader = () => {
  return (
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
  );
};

export default MainHeader;
