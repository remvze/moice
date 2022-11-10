import { memo } from 'react';
import PropTypes from 'prop-types';
import useMedia from 'use-media';

import * as S from './filters.style';

const Filters = memo(({ filters, mode, onChange }) => {
  const isDesktop = useMedia({ minWidth: '800px' });

  return (
    <S.Wrapper>
      <S.List>
        {filters.map(filter => (
          <S.Item key={filter.mode}>
            <S.Button
              className={mode === filter.mode ? 'active' : ''}
              onClick={() => onChange(filter.mode)}
            >
              {mode === filter.mode && (
                <S.Dot
                  transformTemplate={(_, generated) =>
                    `translateY(-50%) ${generated}`
                  }
                  layoutId="dot"
                />
              )}
              {filter.name} {isDesktop && 'Tasks'}
            </S.Button>
          </S.Item>
        ))}
      </S.List>
    </S.Wrapper>
  );
});

Filters.propTypes = {
  filters: PropTypes.array,
  mode: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filters;
