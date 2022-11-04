import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '@/components/modal';
import { useTasks } from '@/store';

import * as S from './import-modal.styles';

const ImportModal = ({ show, onClose }) => {
  const importTasks = useTasks(state => state.importTasks);
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleClose = () => {
    setValue('');
    onClose();
  };

  const handleImport = () => {
    if (!value) return;

    try {
      const { tasks } = JSON.parse(value);

      importTasks(tasks);
      handleClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Modal show={show} onClose={handleClose}>
      <header>Import Tasks</header>

      <S.Textarea
        value={value}
        onChange={handleChange}
        placeholder="Paste your tasks here."
      />
      <S.ButtonContainer>
        <S.Button onClick={handleImport}>Import</S.Button>
      </S.ButtonContainer>
    </Modal>
  );
};

ImportModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ImportModal;
