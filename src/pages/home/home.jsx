import MainLayout from '@/layouts/main';
import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import Tasks from '@/components/tasks';
import Settings from '@/components/settings';
import Progress from '@/components/progress';
import { usePWA } from '@/contexts/pwa';
import * as S from './home.styles';

const Home = () => {
  const { isStandalone } = usePWA();

  const show = !isStandalone
    ? {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 1,
        },
      }
    : {};

  const variants = {
    hide: {},
    show,
  };

  return (
    <MainLayout>
      <S.Main variants={variants} initial="hide" animate="show">
        <Container>
          <HomeHero />
          <Tasks />
        </Container>

        <Progress />
        <Settings />
      </S.Main>
    </MainLayout>
  );
};

export default Home;
