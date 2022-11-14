import PropTypes from 'prop-types';

import * as S from './button.styles';

const Button = ({ children, ...props }) => {
  if (props.to) return <S.Link {...props}>{children}</S.Link>;

  return <S.Button {...props}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

export default Button;
