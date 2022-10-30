import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import * as S from './filters.style';

const Filters = ({ filters, mode, onChange }) => {
  return (
    <S.Wrapper>
      <S.List>
        <AnimatePresence>
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
                {filter.name}
              </S.Button>
            </S.Item>
          ))}
        </AnimatePresence>
      </S.List>
    </S.Wrapper>
  );
};

Filters.propTypes = {
  filters: PropTypes.array,
  mode: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filters;
