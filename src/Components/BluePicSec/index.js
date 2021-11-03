import React from "react";
import "./styles.css";
import Button from '../../Components/Buttons/index'

const index = () => {
  return (
    <section className="bluePic-section">
        <div className="about-me">
          <h2>
            I am A Full Stack Web-Developer, Digital Marketer, and Digital
            Artist.{" "}
          </h2>
          <p>
            {" "}
            My Goal Is To Help You Expand Your Business And Help You Use This
            New Online Marketplace For Your Business's Gain!
          </p>
          <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Learn More</Button>
        </div>
        <article className="gainer-box"></article>
    </section>
  );
};

export default index;
