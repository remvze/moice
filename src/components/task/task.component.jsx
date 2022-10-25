import PropTypes from 'prop-types';

import * as S from './task.styles';

const Task = ({ text, done, onCheck }) => {
  return (
    <S.Wrapper>
      <S.Checkbox checked={done} onCheck={onCheck} />
      <S.Text value={text} done={done} />
    </S.Wrapper>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func,
};

export default Task;
