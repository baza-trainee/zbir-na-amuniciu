import { useCallback, useEffect } from 'react';
import sprite from '../../../assets/icons/sprite.svg';
import { JAR_URL } from '../../../constants/api/api';
import ShareLinks from '../ShareLinks/ShareLinks';
import ReusableBtn from '../ReusableBtn/ReusableBtn';

const ShareModal = ({ closeModal, isOpenModal }) => {
  const closeModalCallback = useCallback(() => {
    if (isOpenModal) {
      closeModal();
    }
  }, [closeModal, isOpenModal]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModalCallback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModalCallback]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModalCallback();
    }
  };

  return (
    <div className="share-modal" onClick={handleOverlayClick}>
      <div className="share-modal-content">
        <button
          className="btn-cross"
          type="button"
          onClick={closeModalCallback}
        >
          <svg className="icon-cross">
            <use href={sprite + '#icon-cross'}></use>
          </svg>
        </button>
        <div className="share-modal-wrap">
          <h2 className="share-modal-title">розповідайте друзям про збір</h2>
          <p className="share-modal-desc">
            Поділіться інформацією про збір на амуніцію. Ваша підтримка допоможе
            врятувати життя!
          </p>
          <ShareLinks closeModal={closeModal} />
          <p className="share-elem">АБО</p>
          <ReusableBtn className="share-modal-btn reuseBtn" text="Донатити" href={JAR_URL} onClick={closeModalCallback} />
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
