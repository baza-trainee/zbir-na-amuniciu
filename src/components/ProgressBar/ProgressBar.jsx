import { useEffect, useState } from "react";
import { fetchJarBalance } from "../../helpers/api/fetchJarBalance";

const ProgressBar = () => {
  const [balance, setBalance] = useState(0);

  // Oбчислення значення ширини елемента прогресу відносно поточного балансу
  const width = balance ? `${(balance / 500).toFixed(1)}%` : '0%';

  // Форматування балансу з роздільником тисяч 1 000
  const formattedBalance = balance.toLocaleString('uk-UA');

  useEffect(() => {
    fetchJarBalance(setBalance);
  }, []);

    return (
      <section id="1" className="progress-section container">
          <h2 className="progress-title">
            Підтримуй героя
          </h2>
        <ul className="progress-info-wrap">
          <li>
            <p className="progress-desc">Зібрано: {formattedBalance} грн</p>
          </li>
          <li>
            <p className="progress-desc">Мета: 45 000 грн</p>
          </li>
        </ul>
        <div className="progress-wrap">
          <div className="progress-bar" style={{ width: width }}></div>
        </div>
      </section>
    );
  };
  
  export default ProgressBar;