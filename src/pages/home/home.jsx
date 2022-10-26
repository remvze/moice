import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import Tasks from '@/components/tasks';
import * as S from './home.styles';

const Home = () => {
  const variants = {
    hide: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 1,
      },
    },
  };

  return (
    <S.Main variants={variants} initial="hide" animate="show">
      <Container>
        <HomeHero />
        <Tasks />
      </Container>
    </S.Main>
  );
};

export default Home;
