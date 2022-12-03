import { useRegisterSW } from 'virtual:pwa-register/react'; // eslint-disable-line

import Confirm from '@/components/confirm';

const ReloadPrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  const handleClose = () => setNeedRefresh(false);

  const handleConfirm = () => updateServiceWorker(true);

  return (
    <Confirm
      show={needRefresh}
      onCancel={handleClose}
      onConfirm={handleConfirm}
      title="New Content"
      text="New content available, click on reload button to update."
      label="Reload"
      neutral
    />
  );
};

export default ReloadPrompt;
