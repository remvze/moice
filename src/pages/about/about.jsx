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
      desc: 'Moice is designed and built with simplicity in mind, to stay intuitive and also eliminate any type of extra distraction.',
      icon: <IoSparklesSharp />,
    },
    {
      title: 'No Signup',
      desc: 'All your tasks are stored here locally on your browser. You can export and import your tasks whenever you want.',
      icon: <IoPersonSharp />,
    },
    {
      title: 'Open-source',
      desc: 'Moice is 100% open-source, meaning you can clone its source code, modify it and deploy it on your own!',
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
        <title>Moice: About</title>
      </Helmet>

      <MainLayout>
        <motion.div variants={variants} initial="hide" animate="show">
          <Container>
            <S.Hero>
              <h1>
                Where Productivity <br /> Meets Minimalism.
              </h1>
              <p>
                Moice is nothing but an intuitive to-do list app designed with
                simplicity in mind, no more fancy but extra feature, no more
                mess, and no more distraction. All tasks are stored locally in
                your browser so you won&apos;t need to make yet another account!
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
              <h3>Sounds Good?</h3>
              <p>Start using Moice for free and boost your productivity.</p>
              <S.HeroCTA to="/">Use Moice</S.HeroCTA>
            </S.CTA>
          </Container>
        </motion.div>
      </MainLayout>
    </>
  );
};

export default About;
