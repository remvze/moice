import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { useTasks } from '@/store';
import * as S from './task-text.styles';

const TaskText = forwardRef(({ task, isPinned, focus }, ref) => {
  const { id, text, done } = task;

  const write = useTasks(state => state.write);
  const add = useTasks(state => state.add);
  const remove = useTasks(state => state.remove);

  const handleChange = e => {
    const text = e.target.value;

    write(id, text.replaceAll('\n', ''), isPinned);
  };

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      const newID = add(id, isPinned);

      focus(newID);
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Backspace' && !text.length) {
      setTimeout(() => {
        try {
          const prevID = remove(id, isPinned);

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
  task: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    done: PropTypes.bool,
  }),
  isPinned: PropTypes.bool,
  focus: PropTypes.func,
};

export default TaskText;
