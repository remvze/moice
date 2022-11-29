import { Helmet } from 'react-helmet-async';

import MainLayout from '@/layouts/main';
import * as S from './not-found.styles';

const NotFound = () => {
  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.75 } },
  };

  return (
    <>
      <Helmet>
        <title>Moice • Page Not Found</title>
      </Helmet>

      <MainLayout>
        <S.Wrapper variants={variants} initial="hide" animate="show">
          <div>
            <S.Code>404</S.Code>
            <S.Message>Ops! Page not found!</S.Message>
          </div>
        </S.Wrapper>
      </MainLayout>
    </>
  );
};

export default NotFound;
