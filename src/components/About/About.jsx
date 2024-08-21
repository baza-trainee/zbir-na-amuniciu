import {
  bagImages,
  kaskImages,
  plitsImages,
} from '../../assets/img/image/imageImports';

const About = () => {
  return (
    <section id="2" className="about-section container">
      <div className="about-images-container">
        <picture>
          <source
            media="(min-width: 1024px)"
            type="image/png"
            srcSet={`${bagImages.desktop.png.src} 1x, ${bagImages.desktop.png.src2x} 2x`}
          />
          <source
            media="(max-width: 1024px)"
            type="image/png"
            srcSet={`${bagImages.mobile.png.src} 1x, ${bagImages.desktop.png.src2x} 2x`}
          />
          <img
            className="about-images about-bag-image"
            src={bagImages.mobile.png.src}
            alt="bag"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 1024px)"
            type="image/png"
            srcSet={`${kaskImages.desktop.png.src} 1x, ${kaskImages.desktop.png.src2x} 2x`}
          />
          <source
            media="(max-width: 1023px)"
            type="image/png"
            srcSet={`${kaskImages.mobile.png.src} 1x, ${kaskImages.desktop.png.src2x} 2x`}
          />
          <img
            className="about-images about-kask-image"
            src={kaskImages.mobile.png.src}
            alt="kask"
          />
        </picture>
        <picture>
          <source
            media="(min-width: 1024px)"
            type="image/png"
            srcSet={`${plitsImages.desktop.png.src} 1x, ${plitsImages.desktop.png.src2x} 2x`}
          />
          <source
            media="(max-width: 1024px)"
            type="image/png"
            srcSet={`${plitsImages.mobile.png.src} 1x, ${plitsImages.desktop.png.src2x} 2x`}
          />
          <img
            className="about-images about-plits-image"
            src={plitsImages.desktop.png.src}
            alt="plits"
          />
        </picture>
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
