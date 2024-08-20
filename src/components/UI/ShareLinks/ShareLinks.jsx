import SOCIAL_LINKS from '../../../constants/socials/links';

const ShareLinks = ({ socialLinksUrl }) => {
  const handleShare = (socialMedia) => {
    let shareUrl = '';

    switch (socialMedia) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          socialLinksUrl
        )}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(socialLinksUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          socialLinksUrl
        )}`;
        break;

      default:
        console.log('Ця функція не підтримується в цьому браузері');
        break;
    }
    return shareUrl;
  };
  return (
    <ul className="share-links-wrap">
      {SOCIAL_LINKS.map(({ id, icon, alt, handler }) => (
        <li key={id}>
          <a href={handleShare(handler)} target="_blank" rel="noreferrer">
            <svg className='share-link-svg' alt={alt}>
              {icon}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ShareLinks;
