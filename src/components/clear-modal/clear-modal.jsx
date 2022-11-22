import { useCallback } from 'react';
import PropTypes from 'prop-types';

import Confirm from '@/components//confirm';
import { useSnackbar } from '@/contexts/snackbar';
import { useTasks } from '@/store';

const ClearModal = ({ show, onClose }) => {
  const tasks = useTasks(state => state.tasks);
  const clearAll = useTasks(state => state.clearAll);
  const replace = useTasks(state => state.replace);
  const snackbar = useSnackbar();

  const undo = useCallback(
    tasks => () => {
      replace(tasks);

      snackbar({
        message: 'Restored all your removed tasks.',
        type: 'success',
      });
    },
    [replace]
  );

  const handleConfirm = () => {
    clearAll();
    onClose();

    snackbar({
      message: 'All your tasks are cleared.',
      type: 'success',
      onUndo: undo(tasks),
    });
  };

  return (
    <Confirm
      show={show}
      onCancel={onClose}
      onConfirm={handleConfirm}
      text="Are you sure you want to clear all your tasks?"
      label="Clear"
    />
  );
};

ClearModal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ClearModal;
