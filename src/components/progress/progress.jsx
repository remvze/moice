import { useMemo } from 'react';

import { useTasks } from '@/store';
import * as S from './progress.styles';

const Progress = () => {
  const tasks = useTasks(state => state.tasks);
  const done = useMemo(() => tasks.filter(task => task.done).length, [tasks]);
  const all = useMemo(() => tasks.filter(task => task.text).length, [tasks]);
  const percent = useMemo(() => Math.floor((done / all) * 100), [all, done]);

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <S.Wrapper variants={variants}>
      <S.Percent>{percent}%</S.Percent>
      <S.Bar>
        <div className="done" style={{ width: `${percent}%` }} />
      </S.Bar>
    </S.Wrapper>
  );
};

export default Progress;
