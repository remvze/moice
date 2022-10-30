import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTasks } from '@/store';
import * as S from './task-text.styles';

const TaskText = forwardRef(({ task, focus, mode }, ref) => {
  const { id, text, done } = task;

  const write = useTasks(state => state.write);
  const add = useTasks(state => state.add);
  const remove = useTasks(state => state.remove);

  const handleChange = e => {
    const text = e.target.value;

    write(id, text.replaceAll('\n', ''));
  };

  const handleKeyUp = e => {
    if (e.key === 'Enter' && ['all', 'active', 'pinned'].includes(mode)) {
      const newID = add(id, mode === 'pinned');

      focus(newID);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Backspace' && !text.length) {
      setTimeout(() => {
        try {
          const prevID = remove(id);

          if (prevID) focus(prevID);
        } catch (error) {
          return;
        }
      }, 50);
    }
  };

  return (
    <S.Text
      $done={done}
      value={text}
      onChange={handleChange}
      placeholder="I have to do..."
      spellCheck={false}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      ref={ref}
    />
  );
});

TaskText.propTypes = {
  task: PropTypes.object,
  focus: PropTypes.func,
  mode: PropTypes.string,
};

export default TaskText;
