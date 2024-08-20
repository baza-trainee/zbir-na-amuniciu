import sprite from '../../../assets/icons/sprite.svg';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export const Header = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // const scrollRef = useRef(null);

  const links = [
    { text: 'Мета', sectionId: '1' },
    { text: 'На що збираєм', sectionId: '2' },
    { text: 'Чому це важливо', sectionId: '3' },
  ];

  const handleButtonClick = (sectionId) => {
    const head = document.querySelector('header');
    const element = document.getElementById(sectionId);
    const h = head.offsetHeight;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - h,
        behavior: 'smooth',
      });
    }
    setActive(false);
  };

  useEffect(() => {
    const closeModal = (event) => {
      if (event.code === 'Escape') {
        setActive(false);
      }
    };

    const onScroll = () => {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    document.body.addEventListener('keyup', (event) => closeModal(event));

    return () => {
      window.removeEventListener('keyup', closeModal);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className={clsx('header', { scrolled: scrolled })}>
      <div className="container">
        <div className="header__body">
          <div className="logo__wrapper" onClick={() => handleButtonClick('#')}>
            <a href="">Baza Trainee Ukraine</a>
          </div>
          <nav className={clsx('nav', { active: active })}>
            <ul className="nav__list">
              {links.map((link) => (
                <li className="nav__item" key={link.sectionId}>
                  <a
                    className="nav__href"
                    onClick={() => handleButtonClick(link.sectionId)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="burger_menu_icon" onClick={() => setActive(!active)}>
            <svg className="test-svg-menu">
              <use href={sprite + '#icon-menu'}></use>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={clsx('burger_menu_blur', { ['active']: active })}
        onClick={() => setActive(false)}
      ></div>
    </header>
  );
};