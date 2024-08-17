const ProgressBar = () => {

    return (
      <section className="progress-section container">
          <h2 className="progress-title">
            Підтримуй героя
          </h2>
        <ul className="progress-info-wrap">
          <li>
            <p className="progress-desc">Зібрано: 15 000 грн</p>
          </li>
          <li>
            <p className="progress-desc">Мета: 45 000 грн</p>
          </li>
        </ul>
        <div className="progress-wrap">
          <div className="progress-bar"></div>
        </div>
      </section>
    );
  };
  
  export default ProgressBar;