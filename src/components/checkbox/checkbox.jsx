import PropTypes from 'prop-types';

import * as S from './checkbox.styles';

const Checkbox = ({ checked, onCheck, className, celebrate }) => {
  const handleChange = e => {
    onCheck(e.target.checked);
  };

  return (
    <S.Container className={className}>
      <S.Input type="checkbox" checked={checked} onChange={handleChange} />
      <S.Box className={checked ? 'checked' : ''} $celebrate={celebrate} />
    </S.Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  className: PropTypes.string,
  celebrate: PropTypes.bool,
};

export default Checkbox;
