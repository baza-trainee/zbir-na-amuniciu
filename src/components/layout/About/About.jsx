const About = () => {
  return (
    <section className="about-section">
      <div className="about-images-container">
        <img
          className="about-images about-bag-image"
          src="/About/bag-mobile.png"
          alt="bag-image"
          width="137"
          height="160"
        />
        <img
          className="about-images about-kask-image"
          src="/About/kask-mobile.png"
          alt="kask-image"
          width="101"
          height="103"
        />
        <img
          className="about-images about-plits-image"
          src="/About/plits-mobile.png"
          alt="plits.png"
          width="115"
          height="120"
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
