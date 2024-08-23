import { useState } from 'react';
import ReusableBtn from '../UI/ReusableBtn/ReusableBtn';
import ShareModal from '../UI/ShareModal/ShareModal';

const CallToShare = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="call-share-section container">
      <h2 className="call-share-title">РОЗПОВІДАЙТЕ ДРУЗЯМ ПРО ЗБІР</h2>
      <div className="call-share-wrap">
        <p className="call-share-paragraph">
          Поділіться інформацією про збір на амуніцію. Ваша підтримка допоможе
          врятувати життя!
        </p>
        <ReusableBtn className="share-btn reuseBtn" text="Поділитись" onClick={openModal} />
        {isOpenModal && (
          <ShareModal closeModal={closeModal} isOpenModal={isOpenModal} />
        )}
      </div>
    </div>
  );
};

export default CallToShare;
