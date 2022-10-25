import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import * as S from './task.styles';

const Task = forwardRef(({ text, done, onCheck, onChange, onAdd }, ref) => {
  const handleChange = e => onChange(e.target.value);

  const handleKeyUp = e => {
    if (e.key === 'Enter') onAdd();
  };

  return (
    <S.Wrapper>
      <S.Checkbox checked={done} onCheck={onCheck} />
      <S.Text
        $done={done}
        value={text}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={ref}
      />
    </S.Wrapper>
  );
});

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
};

export default Task;
