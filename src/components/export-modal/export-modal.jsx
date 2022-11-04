import { useMemo } from 'react';
import PropTypes from 'prop-types';
import clipboard from 'clipboardy';

import Modal from '@/components/modal';
import { useTasks } from '@/store';

import * as S from './export-modal.styles';

const ExportModal = ({ show, onClose }) => {
  const tasks = useTasks(state => state.tasks);
  const string = useMemo(() => JSON.stringify({ tasks }), [tasks]);

  const copy = () => clipboard.write(string);

  return (
    <Modal show={show} onClose={onClose}>
      <header>Export Tasks</header>

      <S.Textarea value={JSON.stringify({ tasks })} />
      <S.ButtonContainer>
        <S.Button onClick={copy}>Copy</S.Button>
      </S.ButtonContainer>
    </Modal>
  );
};

ExportModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ExportModal;
