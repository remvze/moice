import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import * as S from './home.styles';

const Home = () => {
  return (
    <S.Main>
      <Container>
        <HomeHero />
        <h1>Home</h1>
      </Container>
    </S.Main>
  );
};

export default Home;
