import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import {
  IoSparklesSharp,
  IoPersonSharp,
  IoCodeSlashSharp,
} from 'react-icons/io5';

import MainLayout from '@/layouts/main';
import Container from '@/components/container';

import * as S from './about.styles';

const About = () => {
  const features = [
    {
      title: 'Minimal',
      desc: 'Moice is designed and built with simplicity at its core, to bring you an intuitive experience while eliminating every possible distraction.',
      icon: <IoSparklesSharp />,
    },
    {
      title: 'No Sign Up',
      desc: "You shouldn't need to make another account just to manage your daily tasks. With Moice, all your tasks are stored locally in your browser.",
      icon: <IoPersonSharp />,
    },
    {
      title: 'Open-source',
      desc: "We believe in open-source, that's why Moice is 100% open-source. You can clone it, modify it as you like, and deploy it for yourself.",
      icon: <IoCodeSlashSharp />,
    },
  ];

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { delay: 0.5, duration: 0.75 } },
  };

  return (
    <>
      <Helmet>
        <title>Moice • About</title>
      </Helmet>

      <MainLayout>
        <motion.div variants={variants} initial="hide" animate="show">
          <Container>
            <S.Hero>
              <h1>
                Where Productivity <br /> Meets Minimalism.
              </h1>
              <p>
                Moice is built to bring you back the good old to-do lists which
                were meant to be just a to-do list. No more fancy but extra
                feature, no more confusion, and no more distraction.
              </p>
              <S.HeroCTA to="/">Use Moice</S.HeroCTA>
            </S.Hero>

            <S.Features>
              {features.map((feature, index) => (
                <S.Feature key={index}>
                  <div>{feature.icon}</div>
                  <h2>{feature.title}</h2>
                  <p>{feature.desc}</p>
                </S.Feature>
              ))}
            </S.Features>

            <S.CTA>
              <div className="dots" />

              <h3>Sounds Good?</h3>
              <p>Boost your productivity with Moice.</p>
              <S.HeroCTA to="/">Use Moice</S.HeroCTA>
            </S.CTA>
          </Container>
        </motion.div>
      </MainLayout>
    </>
  );
};

export default About;
