import { useMemo } from 'react';
import PropTypes from 'prop-types';

import * as S from './empty-message.styles';

const EmptyMessage = ({ mode }) => {
  const message = useMemo(() => {
    const messages = {
      all: 'How? This cannot be empty!',
      pinned: "There's no task in here yet.",
      active: "Yay! There's no task in here.",
      done: "Ops! There's no task in here.",
    };

    return messages[mode] || 'No task in here.';
  }, [mode]);

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <S.Message variants={variants} key={message} initial="hide" animate="show">
      {message}
    </S.Message>
  );
};

EmptyMessage.propTypes = {
  mode: PropTypes.string,
};

export default EmptyMessage;
