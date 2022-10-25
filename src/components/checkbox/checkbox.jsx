import PropTypes from 'prop-types';

import * as S from './checkbox.styles';

const Checkbox = ({ checked, onCheck, className }) => {
  const handleChange = e => {
    onCheck(e.target.checked);
  };

  return (
    <S.Container className={className}>
      <S.Input type="checkbox" checked={checked} onChange={handleChange} />
      <S.Box className={checked ? 'checked' : ''} />
    </S.Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
  className: PropTypes.string,
};

export default Checkbox;
