import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import tlo from './../../images/tlo2.jpg';
import css from './SharedLayout.module.css';
import { Footer } from 'components/Footer/Footer';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: rgb(105, 69, 2);
    text-decoration: underline;
  }
`;

export const SharedLayout = () => {
  return (
    <div className={css.shared}>
      <div className={css.background__box}>
        <img className={css.background} src={tlo} alt="background" />
        <nav className={css.nav}>
        <StyledLink className={css.nav__link} to="./">
          Home
        </StyledLink>
        <StyledLink className={css.nav__link} to="./o-nas">
         Team
        </StyledLink>
        <StyledLink className={css.nav__link} to="./repertuar">
          Repertuar
        </StyledLink>
        <StyledLink className={css.nav__link} to="./kontakt">
          Kontakt
        </StyledLink>
      </nav>
      </div>
     
      <Outlet />
      <Footer />
    </div>
  );
};
