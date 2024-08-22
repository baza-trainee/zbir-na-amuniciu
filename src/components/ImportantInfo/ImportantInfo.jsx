import sprite from '../../assets/icons/sprite.svg';
import warrior from '../../assets/img/desktop/info-section-warrior.png';

const ImportantInfo = () => {
  return (
    <section id='3' className="container important-info-section">
      <h2 className="important-section-title">ЧОМУ ЦЕ ВАЖЛИВО</h2>
      <div className="important-section">
        <div>
          <ul className="important-section-text">
            <li className="important-section-list">
              <svg className="svg-check">
                <use href={sprite + '#icon-check'}></use>
              </svg>
              <p className="important-section-paragraph">
                Ваш внесок – реальна допомога Воїну, який мужньо захищає нас від
                ворога
              </p>
            </li>
            <li className="important-section-list">
              <svg className="svg-check">
                <use href={sprite + '#icon-check'}></use>
              </svg>
              <p className="important-section-paragraph">
                Якісна амуніція суттєво знижує ризик отримання травм і рятує
                життя в бойових умовах
              </p>
            </li>
            <li className="important-section-list">
              <svg className="svg-check">
                <use href={sprite + '#icon-check'}></use>
              </svg>
              <p className="important-section-paragraph">
                Наявність сучасної амуніції дозволить Олександру краще
                виконувати свої завдання і наближувати нашу перемогу
              </p>
            </li>
          </ul>
          <p className="important-section-footer">ЧЕКАЄМО ДОДОМУ!</p>
        </div>
        <img
          src={warrior}
          alt="warrior-image"
          className="info-section-warrior"
        />
      </div>
    </section>
  );
};
export default ImportantInfo;
