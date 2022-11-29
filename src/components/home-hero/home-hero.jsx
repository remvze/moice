import { IoChevronForwardOutline } from 'react-icons/io5';

import { usePWA } from '@/contexts/pwa';
import * as S from './home-hero.styles';

const HomeHero = () => {
  const { isStandalone } = usePWA();

  const variants = !isStandalone
    ? {
        hide: { x: -30, opacity: 0 },
        show: { x: 0, opacity: 1 },
      }
    : {
        hide: { x: 0, opacity: 1 },
        show: { x: 0, opacity: 1 },
      };

  return (
    <S.Wrapper>
      <S.Title variants={variants}>
        Moice <S.Emoji>💯</S.Emoji>
      </S.Title>
      <S.Desc variants={variants}>Minimal and intuitive task manager.</S.Desc>

      {!isStandalone && (
        <S.About variants={variants} to="/about">
          Learn More{' '}
          <span>
            <IoChevronForwardOutline />
          </span>
        </S.About>
      )}
    </S.Wrapper>
  );
};

export default HomeHero;
