import React from 'react';
import bucholic from '../../assets/images/footerBorder.png';

function Footer() {
  return (

    <footer className="footer-class">
      <p>
        Enshen Test
      </p>
      <img className="footer-img" src={bucholic} alt="a footer of a bucholic horizon" />
    </footer>
  );
}

export default Footer;