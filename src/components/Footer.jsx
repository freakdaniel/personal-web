import React from 'react';
import "../styles/footer.css"

const Footer = function(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <a href="https://t.me/rerokai">text me? i wd like work with u</a>
      </div>
    </footer>
  );
};

export default Footer;