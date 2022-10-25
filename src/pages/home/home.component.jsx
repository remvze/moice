import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import Todos from '@/components/todos';
import * as S from './home.styles';

const Home = () => {
  return (
    <S.Main>
      <Container>
        <HomeHero />
        <Todos />
      </Container>
    </S.Main>
  );
};

export default Home;
