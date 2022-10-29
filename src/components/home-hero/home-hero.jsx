import PropTypes from 'prop-types';

import * as S from './home-hero.styles';

const HomeHero = ({ animation }) => {
  const variants =
    animation === 'opacity'
      ? {
          hide: { opacity: 0 },
          show: { opacity: 1 },
        }
      : {
          hide: { x: -30, opacity: 0 },
          show: { x: 0, opacity: 1 },
        };

  return (
    <S.Wrapper>
      <S.Title variants={variants}>Moice 💯</S.Title>
      <S.Desc variants={variants}>Minimal and intuitive task manager.</S.Desc>
    </S.Wrapper>
  );
};

HomeHero.propTypes = {
  animation: PropTypes.string,
};

export default HomeHero;
