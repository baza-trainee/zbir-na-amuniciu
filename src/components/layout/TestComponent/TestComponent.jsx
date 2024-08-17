import sprite from '../../../assets/icons/sprite.svg';

export const TestComponent = () => {
  return (
    <section>
      <h1 className="test-title">ЗБІР НА АМУНІЦІЮ</h1>
      <svg className="test-svg-menu">
        <use href={sprite + '#icon-menu'}></use>
      </svg>
      <svg className="test-svg-check">
        <use href={sprite + '#icon-check'}></use>
      </svg>
      <svg className="test-svg-telegram">
        <use href={sprite + '#icon-telegram'}></use>
      </svg>
    </section>
  );
};
