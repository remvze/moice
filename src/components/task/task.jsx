import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as S from './task.styles';

const Task = forwardRef(
  ({ text, done, onCheck, onChange, onAdd, onRemove }, ref) => {
    const handleCheck = () => {
      if (text.length !== 0) onCheck();
    };

    const handleChange = e => onChange(e.target.value);

    const handleKeyUp = e => {
      if (e.key === 'Enter') onAdd();
    };

    const handleKeyDown = e => {
      if (e.key === 'Backspace' && !text.length) onRemove();
    };

    return (
      <S.Wrapper>
        <S.Checkbox checked={done} onCheck={handleCheck} />
        <S.Text
          $done={done}
          value={text}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          ref={ref}
        />
      </S.Wrapper>
    );
  }
);

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Task;
