import { useState } from 'react';
import { IoSettingsOutline, IoTrashOutline } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';

import Confirm from '@/components/confirm';
import { useTasks } from '@/store';
import * as S from './settings.style';

const Settings = () => {
  const removeAll = useTasks(state => state.removeAll);

  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

  const handleConfirm = () => {
    removeAll();
    setShowConfirm(false);
    setIsOpen(false);
  };

  const itemsVariants = {
    close: { y: -30, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const wrapperVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      {isOpen && <S.Overlay onClick={toggle} />}

      <S.Wrapper variants={wrapperVariants}>
        <AnimatePresence>
          {isOpen && (
            <S.Items
              variants={itemsVariants}
              initial="close"
              animate="open"
              exit="close"
            >
              <S.Item onClick={() => setShowConfirm(true)}>
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
        show={showConfirm}
        text="Are you sure you want to delete all your tasks?"
        label="Delete"
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default Settings;
