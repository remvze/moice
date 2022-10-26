import { motion } from 'framer-motion';

import * as S from './home-hero.styles';

const HomeHero = () => {
  const variants = {
    hide: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <S.Wrapper>
      <S.Title variants={variants}>Moice 💯</S.Title>
      <motion.p variants={variants}>Super minimal task manager app.</motion.p>
    </S.Wrapper>
  );
};

export default HomeHero;
