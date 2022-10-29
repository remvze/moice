import PropTypes from 'prop-types';

import * as S from './filters.style';

const Filters = ({ filters, mode, onChange }) => {
  return (
    <S.Wrapper>
      <S.List>
        {filters.map(filter => (
          <S.Item key={filter.mode}>
            <S.Button
              className={mode === filter.mode ? 'active' : ''}
              onClick={() => onChange(filter.mode)}
            >
              {filter.name}
            </S.Button>
          </S.Item>
        ))}
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
