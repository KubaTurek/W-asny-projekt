import css from './Footer.module.css';
import { Link } from 'react-router-dom';
import facebookLogo from './../../images/svg/facebook2.svg';
import instagramLogo from './../../images/svg/instagram.svg';
import phone from './../../images/svg/phone.svg';
import mail from './../../images/svg/mail2.svg';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <ul className={css.contacts}>
        <div className={css.footer__box}>
          <li>
            <img src={facebookLogo} alt="facebookLogo" className={css.icon}></img>
            <Link className={css.contacts__link} to="https://www.facebook.com/qarmelloquartett">Facebook</Link>
          </li>
          <li>
          <img src={instagramLogo} alt="instagramLogo" className={css.icon}></img>
            <Link className={css.contacts__link} to="https://www.instagram.com/qarmelloquartett/">Instagram</Link>
          </li>
        </div>
        <div className={css.footer__box}>
          <li>
          <img src={mail} alt="mail" className={css.icon}></img>
            <Link className={css.contacts__link} to="">
              qarmelloquartett@gmail.com
            </Link>
          </li>
          <li>
          <img src={phone} alt="phone" className={css.icon}></img>
            <Link className={css.contacts__link} href="">
              728 208 293
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};
