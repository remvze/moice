import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

import { useTasks } from '@/store';
import * as S from './task-options.styles';

const TaskOptions = ({ task, isPinned, allDone, dragControls }) => {
  const { id, text, done } = task;

  const check = useTasks(state => state.check);
  const togglePin = useTasks(state => state.togglePin);

  const handleCheck = () => {
    if (text.length !== 0) check(id, isPinned);
  };

  const handleTouch = e => {
    e.stopPropagation();
  };

  const handleTogglePin = () => togglePin(id);

  return (
    <S.Options>
      <S.Drag onPointerDown={e => dragControls.start(e)}>
        <div />
        <div />
        <div />
      </S.Drag>

      <S.Pinned
        onClick={handleTogglePin}
        className={isPinned ? 'pinned' : ''}
        onTouchStart={handleTouch}
      >
        <FaStar />
      </S.Pinned>
      <S.Checkbox
        checked={done}
        onCheck={handleCheck}
        celebrate={allDone}
        onTouchStart={handleTouch}
      />
    </S.Options>
  );
};

TaskOptions.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  isPinned: PropTypes.bool,
  allDone: PropTypes.bool,
  dragControls: PropTypes.object,
};

export default TaskOptions;
