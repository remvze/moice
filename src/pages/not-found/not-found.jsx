import MainLayout from '@/layouts/main';
import * as S from './not-found.styles';

const NotFound = () => {
  return (
    <MainLayout>
      <S.Wrapper>
        <div>
          <S.Code>404</S.Code>
          <S.Message>Ops! Page not found.</S.Message>
        </div>
      </S.Wrapper>
    </MainLayout>
  );
};

export default NotFound;
