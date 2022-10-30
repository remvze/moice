import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import TaskText from '@/components/task-text';
import TaskOptions from '@/components/task-options';
import * as S from './task.styles';

const Task = forwardRef((props, ref) => {
  const { mounted, task, allDone = false, onDrag, focus, mode } = props;

  const variants = {
    hide: mounted ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' },
    show: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.15 },
    },
  };

  return (
    <S.Wrapper
      value={task}
      variants={variants}
      initial="hide"
      animate="show"
      whileDrag={{ scale: 1.05 }}
      onDragStart={onDrag}
    >
      <TaskOptions task={task} isPinned={task.pinned} allDone={allDone} />
      <TaskText task={task} mode={mode} focus={focus} ref={ref} />
    </S.Wrapper>
  );
});

Task.propTypes = {
  mounted: PropTypes.bool,
  text: PropTypes.string,
  done: PropTypes.bool,
  task: PropTypes.object,
  allDone: PropTypes.bool,
  focus: PropTypes.func,
  onDrag: PropTypes.func,
  mode: PropTypes.string,
};

export default Task;
