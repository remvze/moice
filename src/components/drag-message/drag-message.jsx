import { FaInfoCircle } from 'react-icons/fa';

import * as S from './drag-message.styles';

const DragMessage = () => {
  const variants = {
    show: { x: 0, opacity: 1 },
    hide: { x: -30, opacity: 0 },
  };

  return (
    <S.Message
      variants={variants}
      initial="hide"
      animate="show"
      exit="hide"
      layout
    >
      <S.Icon>
        <FaInfoCircle />
      </S.Icon>
      Drag and drop to reorder.
    </S.Message>
  );
};

export default DragMessage;
