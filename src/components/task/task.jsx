import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import TaskText from '@/components/task-text';
import TaskOptions from '@/components/task-options';
import * as S from './task.styles';

const Task = forwardRef((props, ref) => {
  const {
    mounted,
    task,
    isPinned = false,
    allDone = false,
    onDrag,
    focus,
  } = props;

  const variants = {
    hide: mounted
      ? { opacity: 0, x: -30 }
      : {
          opacity: 1,
          x: 0,
        },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.15, delay: 0.3 },
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
      <TaskOptions task={task} isPinned={isPinned} allDone={allDone} />
      <TaskText task={task} isPinned={isPinned} focus={focus} ref={ref} />
    </S.Wrapper>
  );
});

Task.propTypes = {
  mounted: PropTypes.bool,
  text: PropTypes.string,
  done: PropTypes.bool,
  task: PropTypes.object,
  isPinned: PropTypes.bool,
  allDone: PropTypes.bool,
  focus: PropTypes.func,
  onDrag: PropTypes.func,
};

export default Task;
