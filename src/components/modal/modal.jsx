import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

import * as S from './modal.styles';

const Modal = ({ children, show, onClose }) => {
  const overlay = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  const content = {
    hide: { overflowY: 'hidden' },
    show: { overflowY: 'auto' },
  };

  const modal = {
    hide: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          <S.Overlay
            variants={overlay}
            initial="hide"
            animate="show"
            exit="hide"
            onClick={onClose}
          />
          <S.Modal
            variants={modal}
            transformTemplate={(_, generated) =>
              `translate(-50%, -50%) ${generated}`
            }
            initial="hide"
            animate="show"
            exit="hide"
            onClick={onClose}
          >
            <S.Content
              motion
              variants={content}
              initial="hide"
              animate="show"
              exit="hide"
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
