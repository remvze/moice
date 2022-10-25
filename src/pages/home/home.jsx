import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import Tasks from '@/components/tasks';
import * as S from './home.styles';

const Home = () => {
  return (
    <S.Main>
      <Container>
        <HomeHero />
        <Tasks />
      </Container>
    </S.Main>
  );
};

export default Home;
