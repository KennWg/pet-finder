import React from 'react';
import bucholic from '../../assets/images/footerBorder.png';

function Footer() {
  return (

    <footer className="footer-class">
      <p>
      &copy; Copyright Error-dite! 2022
      </p>
      <img className="footer-img" src={bucholic} alt="a footer of a bucholic horizon" />
    </footer>
  );
}

export default Footer;