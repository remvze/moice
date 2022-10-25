import PropTypes from 'prop-types';

import * as S from './container.styles';

const Container = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
