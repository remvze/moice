import PropTypes from 'prop-types';

import MainHeader from '@/components/main-header';
import MainFooter from '@/components/main-footer';
import { usePWA } from '@/contexts/pwa';
import * as S from './main.styles';

const Main = ({ children }) => {
  const { isStandalone } = usePWA();

  return (
    <S.Wrapper>
      {!isStandalone && <MainHeader />}

      {children}

      {!isStandalone && <MainFooter />}
    </S.Wrapper>
  );
};

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
