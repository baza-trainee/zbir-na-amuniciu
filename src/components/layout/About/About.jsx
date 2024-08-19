import bagDesktop from '../../../assets/img/desktop/bag.png';
import bagMobile from '../../../assets/img/mobile/bag.png';
import kaskDesktop from '../../../assets/img/desktop/kask.png';
import kaskMobile from '../../../assets/img/mobile/kask.png';
import plitsDesktop from '../../../assets/img/desktop/plits.png';
import plitsMobile from '../../../assets/img/mobile/plits.png';

const About = () => {
  return (
    <section className="about-section container">
      <div className="about-images-container">
        <img
          className="about-images about-bag-image desktop"
          src={bagDesktop}
          alt="bag-image-desktop"
        />
        <img
          className="about-images about-kask-image desktop"
          src={kaskDesktop}
          alt="kask-image-desktop"
        />
        <img
          className="about-images about-plits-image desktop"
          src={plitsDesktop}
          alt="plits-image-desktop"
        />
        <img
          className="about-images about-bag-image mobile"
          src={bagMobile}
          alt="bag-image-mobile"
        />
        <img
          className="about-images about-kask-image mobile"
          src={kaskMobile}
          alt="kask-image-mobile"
        />
        <img
          className="about-images about-plits-image mobile"
          src={plitsMobile}
          alt="plits-image-mobile"
        />
      </div>
      <article className="about-article-section">
        <h2 className="about-title">ПРО ЗБІР</h2>
        <p className="about-text">
          Ми збираємо кошти на каску, плити, рюкзак 40 л, спальнік, карімат +
          векторний аналізатор, отже на все необхідне для нашого захисника
        </p>
      </article>
      {/* use the button component when ready */}
      <button
        className="about-button"
        onClick={() =>
          (window.location.href = 'https://send.monobank.ua/jar/4hWrKfm156')
        }
      >
        Донатити
      </button>
    </section>
  );
};

export default About;
