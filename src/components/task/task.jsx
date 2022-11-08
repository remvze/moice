import { forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDragControls } from 'framer-motion';

import TaskText from '@/components/task-text';
import TaskOptions from '@/components/task-options';
import * as S from './task.styles';

const Task = forwardRef((props, ref) => {
  const { mounted, task, allDone = false, onDrag, focus, mode } = props;

  const controls = useDragControls();
  const taskRef = useRef();

  const variants = {
    hide: mounted ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' },
    show: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.15 },
    },
  };

  useEffect(() => {
    const touchHandler = e => e.preventDefault();

    const taskEl = taskRef.current;

    if (taskEl) {
      taskEl.addEventListener('touchstart', touchHandler, { passive: false });

      return () => {
        taskEl.removeEventListener('touchstart', touchHandler, {
          passive: false,
        });
      };
    }
    return;
  }, [taskRef]);

  return (
    <S.Wrapper
      value={task}
      variants={variants}
      initial="hide"
      animate="show"
      whileDrag={{ scale: 1.05 }}
      onDragStart={onDrag}
      dragListener={false}
      dragControls={controls}
      ref={taskRef}
    >
      <TaskOptions
        task={task}
        isPinned={task.pinned}
        allDone={allDone}
        dragControls={controls}
      />
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
