import PropTypes from 'prop-types';

import * as S from './checkbox.styles';

const Checkbox = ({ checked, onCheck }) => {
  const handleChange = e => {
    onCheck(e.target.checked);
  };

  return (
    <S.Container>
      <S.Input type="checkbox" checked={checked} onChange={handleChange} />
      <S.Box className={checked ? 'checked' : ''} />
    </S.Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onCheck: PropTypes.func,
};

export default Checkbox;
