import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

import * as S from './task.styles';

const Task = forwardRef(
  (
    {
      mounted,
      task,
      text,
      done,
      isPinned = false,
      onTogglePin,
      onCheck,
      onChange,
      onAdd,
      onRemove,
    },
    ref
  ) => {
    const handleCheck = () => {
      if (text.length !== 0) onCheck();
    };

    const handleChange = e => onChange(e.target.value);

    const handleKeyUp = e => {
      if (e.key === 'Enter') onAdd();
    };

    const handleKeyDown = e => {
      if (e.key === 'Backspace' && !text.length) onRemove();
    };

    return (
      <S.Wrapper
        value={task}
        initial={
          mounted
            ? { opacity: 0, x: -30 }
            : {
                opacity: 1,
                x: 0,
              }
        }
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.15, delay: 0.3 },
        }}
        whileDrag={{ scale: 1.05 }}
      >
        <S.Options>
          <S.Pinned onClick={onTogglePin} className={isPinned ? 'pinned' : ''}>
            <FaStar />
          </S.Pinned>
          <S.Checkbox checked={done} onCheck={handleCheck} />
        </S.Options>
        <S.Text
          $done={done}
          value={text}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
          ref={ref}
        />
      </S.Wrapper>
    );
  }
);

Task.propTypes = {
  mounted: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string,
  done: PropTypes.bool,
  task: PropTypes.object,
  isPinned: PropTypes.bool,
  onTogglePin: PropTypes.func,
  onCheck: PropTypes.func,
  onChange: PropTypes.func,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
};

export default Task;
