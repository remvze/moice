import PropTypes from 'prop-types';

import Confirm from '@/components//confirm';
import { useTasks } from '@/store';

const ClearModal = ({ show, onClose }) => {
  const clearAll = useTasks(state => state.clearAll);

  const handleConfirm = () => {
    clearAll();
    onClose();
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
