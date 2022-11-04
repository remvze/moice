import { useState } from 'react';
import {
  IoSettingsOutline,
  IoArrowUpCircleOutline,
  IoArrowDownCircleOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';

import ExportModal from '@/components/export-modal';
import ImportModal from '@/components/import-modal';
import ClearModal from '@/components/clear-modal';
import * as S from './settings.style';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [showClear, setShowClear] = useState(false);

  const toggle = () => setIsOpen(prev => !prev);

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
              <S.Item onClick={() => setShowExport(true)}>
                <S.ItemIcon>
                  <IoArrowUpCircleOutline />
                </S.ItemIcon>

                <S.ItemLabel>Export Tasks</S.ItemLabel>
              </S.Item>

              <S.Item onClick={() => setShowImport(true)}>
                <S.ItemIcon>
                  <IoArrowDownCircleOutline />
                </S.ItemIcon>

                <S.ItemLabel>Import Tasks</S.ItemLabel>
              </S.Item>

              <S.Item onClick={() => setShowClear(true)}>
                <S.ItemIcon>
                  <IoTrashOutline />
                </S.ItemIcon>

                <S.ItemLabel>Clear Tasks</S.ItemLabel>
              </S.Item>
            </S.Items>
          )}
        </AnimatePresence>

        <S.Button onClick={toggle} $active={isOpen}>
          <IoSettingsOutline />
        </S.Button>
      </S.Wrapper>

      <ExportModal show={showExport} onClose={() => setShowExport(false)} />
      <ImportModal show={showImport} onClose={() => setShowImport(false)} />
      <ClearModal show={showClear} onClose={() => setShowClear(false)} />
    </>
  );
};

export default Settings;
