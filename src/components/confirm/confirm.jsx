import PropTypes from 'prop-types';

import Modal from '@/components/modal';
import * as S from './confirm.styles';

const Confirm = ({
  show,
  onConfirm,
  onCancel,
  text,
  label = 'Yes',
  title = 'Are you sure?',
  neutral = false,
}) => {
  return (
    <Modal show={show} onClose={onCancel}>
      <header>{title}</header>

      <S.Message>{text}</S.Message>
      <S.Buttons>
        <S.Button $cancel onClick={onCancel}>
          Cancel
        </S.Button>
        <S.Button $confirm={!neutral} $neutral={neutral} onClick={onConfirm}>
          {label}
        </S.Button>
      </S.Buttons>
    </Modal>
  );
};

Confirm.propTypes = {
  show: PropTypes.bool,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  neutral: PropTypes.bool,
};

export default Confirm;
