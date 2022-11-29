import { useMemo } from 'react';

import { useTasks } from '@/store';
import * as S from './progress.styles';

const Progress = () => {
  const tasks = useTasks(state => state.tasks);
  const done = useMemo(() => tasks.filter(task => task.done).length, [tasks]);
  const all = useMemo(() => tasks.filter(task => task.text).length, [tasks]);
  const percent = useMemo(() => Math.floor((done / all) * 100), [all, done]);

  return (
    <S.Wrapper>
      <S.Percent>{percent}%</S.Percent>
      <S.Bar>
        <div className="done" style={{ width: `${percent}%` }} />
      </S.Bar>
    </S.Wrapper>
  );
};

export default Progress;
