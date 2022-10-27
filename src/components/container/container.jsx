import PropTypes from 'prop-types';

import * as S from './container.styles';

const Container = ({ children, className, large }) => {
  return (
    <S.Container $large={large} className={className}>
      {children}
    </S.Container>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  large: PropTypes.bool,
};

export default Container;
