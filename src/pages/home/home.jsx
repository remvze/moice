import PropTypes from 'prop-types';

import MainLayout from '@/layouts/main';
import Container from '@/components/container';
import HomeHero from '@/components/home-hero';
import Tasks from '@/components/tasks';
import * as S from './home.styles';

const Home = ({ animation }) => {
  const variants = {
    hide: {},
    show: {
      transition: {
        staggerChildren: animation === 'opacity' ? 0.25 : 0.15,
        delayChildren: 1,
      },
    },
  };

  return (
    <MainLayout>
      <S.Main variants={variants} initial="hide" animate="show">
        <Container>
          <HomeHero animation={animation} />
          <Tasks />
        </Container>
      </S.Main>
    </MainLayout>
  );
};

Home.propTypes = {
  animation: PropTypes.string,
};

export default Home;
