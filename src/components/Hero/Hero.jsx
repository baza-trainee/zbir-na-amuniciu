import warrior from '../../assets/Hero/warrior.png';
import ReusableBtn from '../UI/ReusableBtn/ReusableBtn';

const Hero = () => {
  return (
    <section className="HeroSection">
      <div className="container">
        <div className="HeroSection__body">
          <div className="HeroSection__content">
            <h1 className="HeroSection__title">Збір на амуніцію</h1>
            <p className="HeroSection__text">
              Наша мета - забезпечити нашого колегу і учасника Олександра
              необхідною амуніцією для виконання бойових дій.
              <br />
              <br />
              Ваша допомога підтримує нашого товариша!
            </p>
            <div className="HeroSection__img HeroSection__img-mob">
            <img src={warrior} alt="" />
            </div>
            <ReusableBtn
              className="reuseBtn"
              text="Донатити"
              href="https://send.monobank.ua/jar/4hWrKfm156"
            />
          </div>
          <div className="HeroSection__img HeroSection__img-desctop">
            <img src={warrior} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
