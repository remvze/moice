import { useRegisterSW } from 'virtual:pwa-register/react'; // eslint-disable-line

import Confirm from '@/components/confirm';

const ReloadPrompt = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(swUrl, r) {
      alert(swUrl);
      console.log(`Service Worker at: ${swUrl}`);

      r &&
        setInterval(() => {
          console.log('Checking for sw update');
          r.update();
        }, 20000);
    },
    onRegisterError(error) {
      alert('error', error);
      console.log('SW registration error', error);
    },
  });

  const handleCancel = () => setNeedRefresh(false);

  const handleConfirm = () => updateServiceWorker(true);

  return (
    <Confirm
      show={needRefresh}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
      title="Reload Required"
      text="New content available, click on reload button to update."
      label="Reload"
      neutral
    />
  );
};

export default ReloadPrompt;
