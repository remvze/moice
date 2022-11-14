import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Container from '@/components/container';

export const Header = styled(motion.header)`
  padding: 25px 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 20px;
`;

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  font-weight: 600;
  color: ${({ theme }) => theme.fg.beta};
  font-size: var(--font-xs);
  transition: 0.4s;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.fg.alpha};
  }

  span {
    display: inline-block;
    margin-left: 5px;
    line-height: 0;
  }

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export const HeaderExternalLink = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.fg.beta};
  font-size: var(--font-xs);
  transition: 0.4s;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.fg.alpha};
  }

  span {
    display: inline-block;
    margin-left: 5px;
    line-height: 0;
  }

  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;
