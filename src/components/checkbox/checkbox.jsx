import PropTypes from 'prop-types';
import { IoCheckmarkSharp } from 'react-icons/io5';

import * as S from './checkbox.styles';

const Checkbox = ({ checked, onCheck, className, celebrate }) => {
  const handleChange = e => {
    onCheck(e.target.checked);
  };

  return (
    <S.Container className={className}>
      <S.Input type="checkbox" checked={checked} onChange={handleChange} />
      <S.Box className={checked ? 'checked' : ''} $celebrate={celebrate}>
        <span>
          <IoCheckmarkSharp />
        </span>
      </S.Box>
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
