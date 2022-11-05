import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import * as S from './modal.styles';

const Modal = ({ children, show, onClose }) => {
  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <S.Overlay
            variants={variants}
            initial="hide"
            animate="show"
            exit="hide"
            onClick={onClose}
          />
          <S.Modal
            variants={variants}
            initial="hide"
            animate="show"
            exit="hide"
            onClick={onClose}
          >
            <S.Content
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <S.Close onClick={onClose}>
                <IoClose />
              </S.Close>

              {children}
            </S.Content>
          </S.Modal>
        </>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
