import styled from 'styled-components';

import Button from '@/components/button';

export const Hero = styled.section`
  padding: 100px 0;

  h1 {
    font-size: var(--font-xl);
    font-weight: 600;
    font-family: var(--font-display);
    line-height: 1.4;
  }

  p {
    color: ${({ theme }) => theme.fg.beta};
    margin-top: 10px;
    width: 100%;
    max-width: 480px;
  }
`;

export const HeroCTA = styled(Button)`
  margin-top: 20px;
  padding: 11px 22px !important;
  background-color: ${({ theme }) => theme.bg.accent.primary};
  background-image: ${({ theme }) =>
    `linear-gradient(45deg, ${theme.gradient.primary})`};
  box-shadow: 0 6px 12px rgba(9, 107, 255, 0.15);
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 -10px;
`;

export const Feature = styled.div`
  width: 32%;
  padding: 0 10px;

  @media (max-width: 730px) {
    width: 50%;
    margin-bottom: 25px;
  }

  @media (max-width: 510px) {
    width: 100%;
  }

  h2 {
    font-family: var(--font-heading);
    font-size: var(--font-l);
    color: ${({ theme }) => theme.fg.alpha};
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.fg.beta};
    font-size: var(--font-s);
  }

  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.bg.beta};
    margin-bottom: 10px;
    border-radius: var(--border-radius-l);
    border: ${({ theme }) => `1px solid ${theme.bg.gamma}`};
  }
`;

export const CTA = styled.section`
  margin-top: 90px;
  border-radius: var(--border-radius-l);
  background-color: ${({ theme }) => theme.bg.beta};
  padding: 50px 20px;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  z-index: 4;

  @media (max-width: 730px) {
    margin-top: 50px;
  }

  h3 {
    font-size: var(--font-l);
    font-family: var(--font-heading);
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.fg.beta};
    font-size: var(--font-s);
  }

  .dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: radial-gradient(#fff 10%, transparent 10%);
    background-size: 10px 10px;
    z-index: -1;
    opacity: 0.2;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: ${({ theme }) =>
        `linear-gradient(0deg, ${theme.bg.beta}, transparent)`};
    }
  }
`;
