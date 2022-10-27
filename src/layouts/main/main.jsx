import PropTypes from 'prop-types';

import MainHeader from '@/components/main-header';
import MainFooter from '@/components/main-footer';
import * as S from './main.styles';

const Main = ({ children }) => {
  return (
    <S.Wrapper>
      <MainHeader />

      {children}

      <MainFooter />
    </S.Wrapper>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
