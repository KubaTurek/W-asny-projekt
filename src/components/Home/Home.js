import css from './Home.module.css';
import we from './../../images/my.jpg';
import plener from './../../images/plener.jpg';
import plenerTwo from './../../images/plener2.jpg';

export const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}> Qarmello Quartett</h1>
      <div className={css.content}>
        <div className={css.content__left}>
            <p className={css.description}>
              Kwartet smyczkowy to cztery osoby, które, aby osiągnąć wyjątkowe
              brzmienie, muszą grać jak jeden instrument. Właśnie o taki efekt
              dbamy już od kilku lat, tworząc zespół złożony z instrumentów
              smyczkowych – dwojga skrzypiec, altówki i wiolonczeli. Z
              przyjemnością spełnimy Wasze oczekiwania, dbając o to, by Wasz
              wyjątkowy dzień był jeszcze piękniejszy. Oferujemy oprawę muzyczną
              ceremonii ślubnej, życzeń, obiadu weselnego oraz różnego rodzaju
              innych uroczystości i przyjęć.
            </p>
          <img className={css.plener} src={plener} alt="plener" />
          <img className={css.plenerTwo} src={plenerTwo} alt="plenerTwo" />
        </div>
        <img className={css.we} src={we} alt="we" />
      </div>
    </div>
  );
};
