import sprite from '../../assets/icons/sprite.svg';

export const URL = 'https://zbir-na-amuniciu.vercel.app/'

export const SOCIAL_LINKS = [
    {
      "id": "1",
      "name": "Facebook",
      'icon': <use href={sprite + '#icon-facebook'}></use>,
      "alt": "Facebook",
      "handler": "facebook",
    },
    {
      "id": "2",
      "name": "Telegram",
      'icon': <use href={sprite + '#icon-telegram'}></use>,
      "alt": "Telegram",
      "handler": "telegram",
    },
    {
      "id": "3",
      "name": "Linkedin",
      'icon':  <use href={sprite + '#icon-linkedin'}></use>,
      "alt": "Linkedin",
      "handler": "linkedin",
    }
  ]