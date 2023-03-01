import css from './Repertuar.module.css';
import violins from './../../images/violins.jpg';

export const Repertuar = () => {
  return (
    <div className={css.repertuar}>
        <h2 className={css.repertuar__title}>Przykładowa lista utworów</h2>
      <img className={css.violins} src={violins} alt="violins"></img>
    </div>
  );
};
