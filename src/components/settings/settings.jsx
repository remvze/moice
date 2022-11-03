import { useState } from 'react';
import { IoSettingsOutline, IoTrashOutline } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';

import * as S from './settings.style';
import Confirm from '@/components/confirm';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

  const variants = {
    close: { y: -30, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  return (
    <>
      {isOpen && <S.Overlay onClick={toggle} />}

      <S.Wrapper>
        <AnimatePresence>
          {isOpen && (
            <S.Items
              variants={variants}
              initial="close"
              animate="open"
              exit="close"
            >
              <S.Item onClick={() => setShowModal(true)}>
                <S.ItemIcon>
                  <IoTrashOutline />
                </S.ItemIcon>

                <S.ItemLabel>Delete Tasks</S.ItemLabel>
              </S.Item>
            </S.Items>
          )}
        </AnimatePresence>

        <S.Button onClick={toggle}>
          <IoSettingsOutline />
        </S.Button>
      </S.Wrapper>

      <Confirm
        show={showModal}
        text="Are you sure you want to delete all your tasks?"
        label="Delete"
        onConfirm={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <h1>Hello</h1>
      </Confirm>
    </>
  );
};

export default Settings;
