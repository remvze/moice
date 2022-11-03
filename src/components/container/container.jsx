import PropTypes from 'prop-types';

import * as S from './container.styles';

const Container = ({ children, large, small, motion, ...props }) => {
  const Component = motion ? S.MotionContainer : S.Container;

  return (
    <Component $large={large} $small={small} {...props}>
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  large: PropTypes.bool,
  small: PropTypes.bool,
  motion: PropTypes.bool,
};

export default Container;
