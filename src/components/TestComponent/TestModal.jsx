import { useState } from 'react';
import ShareModal from '../UI/ShareModal';

const TestModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <section>
      <button onClick={openModal}>Донатити</button>
      {isOpenModal && (
        <ShareModal closeModal={closeModal} isOpenModal={isOpenModal} />
      )}
    </section>
  );
};

export default TestModal;
