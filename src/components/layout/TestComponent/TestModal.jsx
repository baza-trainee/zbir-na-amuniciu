import { useState } from 'react';
import ShareModal from '../../UI/ShareModal';

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
      <button
        style={{
          margin: 'auto',
          display: 'block',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: '#fff',
        }}
        onClick={openModal}
      >
        Поділитись своїм добром
      </button>
      {isOpenModal && (
        <ShareModal closeModal={closeModal} isOpenModal={isOpenModal} />
      )}
    </section>
  );
};

export default TestModal;
