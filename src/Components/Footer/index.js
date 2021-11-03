import React, { useState, useEffect } from "react";
import "./Footer.css";
import FooterTop from "./FooterBars/FooterTop/index";
import FooterBottom from "./FooterBars/FooterBottom/index";
import Logo from "../../images/griffinjoshs-logo.png";
import FooterContent from "../../Data/FooterContent";

const Footer = () => {
  const [footerContent, setFooterContent] = useState([]);
  useEffect(() => {
    setFooterContent(FooterContent);
  });
  return (
    <footer id="footer">
      {footerContent?.map((footer, i) => (
        <section className="footerMiddle-sec" key={footer.id}>
          <h3>{footer.footerHeader}</h3>
          <div className="divider"></div>
          <br></br>
          <div id='footerContent'>
          {footer.Menu1}
         {footer.Menu2}
         {footer.Menu3}
          </div>
        </section>
      ))}
    </footer>
  );
};

export default Footer;
