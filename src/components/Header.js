import React from "react";
import "../css/header.css";
import profilePicture from "../images/delfi-avatar.png";

function Header() {
  return (
    <header className="df wp jcc aic t-nwp t-jca">
      <section className="profileImage">
        <img src={profilePicture} alt="Delfi Casarino" />
      </section>
      <section className="df wp jcc aic info">
        <h1 className="textCenter">Delfi Casarino</h1>
        <h2 className="textCenter">Full Stack Developer</h2>
      </section>
    </header>
  );
}

export default Header;
