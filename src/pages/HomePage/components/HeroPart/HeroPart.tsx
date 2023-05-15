import './HeroPart.scss';
import heroBack from './hero-back.png';
import heroBackMobile from './hero-back-mobile.png';

export const HeroPart = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>
          ТЕХНОЛОГИЧНАЯ
          <br />
          ОДЕЖДА ДЛЯ ЗИМНЕГО
          <br />
          СПОРТА
        </h1>
        <div className="hero-section-bottom">
          <div className="hero-section-bottom-label">
            НОВАЯ СНОУБОРДИЧЕСКАЯ
            <br />
            КОЛЛЕКЦИЯ
          </div>
          <a href="/">ЗА ПОКУПКАМИ</a>
        </div>
      </div>
      <div className="hero-background-container">
        <picture>
          <source media="(max-width: 900px)" srcSet={heroBackMobile} />
          <img src={heroBack} alt="Hero" className="hero-image" />
        </picture>
      </div>
    </section>
  );
};
