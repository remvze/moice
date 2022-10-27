import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const HeaderLink = styled.a`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 13px;
  letter-spacing: 1px;
  transition: 0.4s;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  span {
    display: inline-block;
    margin-left: 5px;
    line-height: 0;
  }
`;
