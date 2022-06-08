import React from "react";
import '../css/activeWebs.css';
import toydealer from "../images/toydealer.jpg"
import joyascolordeflor from "../images/joyascolordeflor.jpg"
import proseek from "../images/proseek.jpg"
import casarino from "../images/casarino.jpg"

function ActiveWebs({active}) {
  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        <img src={toydealer} alt="Toy Dealer Shop" />
        <img src={joyascolordeflor} alt="Toy Dealer Shop" />
        <img src={proseek} alt="Toy Dealer Shop" />
        <img src={casarino} alt="Toy Dealer Shop" />
      </article>
    </section>
  );
}

export default ActiveWebs;