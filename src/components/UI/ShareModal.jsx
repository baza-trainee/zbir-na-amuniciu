import { useCallback, useEffect } from 'react';
import sprite from '../../assets/icons/sprite.svg';

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
        <h2>Поділитися з нами:</h2>
      </div>
    </div>
  );
};

export default ShareModal;
