import PropTypes from 'prop-types';

import Checkbox from '@/components/checkbox';

const Task = ({ text, done, onCheck }) => {
  return (
    <li>
      <Checkbox checked={done} onCheck={onCheck} /> <p>{text}</p>
    </li>
  );
};

Task.propTypes = {
  text: PropTypes.string,
  done: PropTypes.bool,
  onCheck: PropTypes.func,
};

export default Task;
