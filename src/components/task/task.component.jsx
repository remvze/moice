import PropTypes from 'prop-types';

import * as S from './task.styles';

const Task = ({ text, done, onCheck, onChange }) => {
  const handleChange = e => onChange(e.target.value);

  return (
    <S.Wrapper>
      <S.Checkbox checked={done} onCheck={onCheck} />
      <S.Text value={text} onChange={handleChange} done={done} />
    </S.Wrapper>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func,
  onChange: PropTypes.func,
};

export default Task;
