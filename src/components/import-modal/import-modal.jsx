import { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '@/components/modal';
import { useSnackbar } from '@/contexts/snackbar';
import { useTasks } from '@/store';
import { validateTasks } from '@/helpers/validators/tasks';

import * as S from './import-modal.styles';

const ImportModal = ({ show, onClose }) => {
  const importTasks = useTasks(state => state.importTasks);
  const snackbar = useSnackbar();
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);

  const handleClose = () => {
    setValue('');
    onClose();
  };

  const handleImport = () => {
    if (!value) return;

    try {
      const parsedValue = JSON.parse(value);
      const isValid = validateTasks(parsedValue);

      if (!isValid) return snackbar('Tasks format is not valid.');

      const { tasks } = parsedValue;

      importTasks(tasks);
      handleClose();

      snackbar('All your tasks are imported.');
    } catch (error) {
      console.error(error.message);

      snackbar('Something went wrong. Try again.');
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
