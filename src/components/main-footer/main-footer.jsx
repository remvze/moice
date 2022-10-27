import Container from '@/components/container';
import * as S from './main-footer.styles';

const MainFooter = () => {
  return (
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
          <a href="https://twitter.com/remvze" target="_blank" rel="noreferrer">
            Maze ✱
          </a>
        </S.FooterText>
      </Container>
    </S.Footer>
  );
};

export default MainFooter;
