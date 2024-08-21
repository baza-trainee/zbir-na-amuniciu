import { SOCIAL_LINKS, URL } from '../../../constants/socials/links';

const ShareLinks = ({ closeModal }) => {
  const handleShare = (socialMedia) => {
    let shareUrl = '';

    switch (socialMedia) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${
          URL
        }&text=Терміновий збір на необхідну амуніцію для воїна Олександра!`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${URL}&text=Терміновий збір на необхідну амуніцію для воїна Олександра!`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${URL}&text=Терміновий збір на необхідну амуніцію для воїна Олександра!`;
        break;
      default:
        console.log('Ця функція не підтримується в цьому браузері');
        break;
    }
    return shareUrl;
  };

  const handleLinkClick = (e, handler) => {
    e.preventDefault();
    closeModal();
    window.open(handleShare(handler), '_blank');
  };

  return (
    <ul className="share-links-wrap">
      {SOCIAL_LINKS.map(({ id, icon, alt, handler }) => (
        <li key={id}>
          <a
            href={handleShare(handler)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => handleLinkClick(e, handler)}
          >
            <svg className="share-link-svg" alt={alt}>
              {icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShareLinks;
