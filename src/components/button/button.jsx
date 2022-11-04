import PropTypes from 'prop-types';

import * as S from './button.styles';

const Button = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
