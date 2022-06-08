import React from "react";
import '../css/webs.css';
import toydealer from "../images/toydealer.jpg"
import joyascolordeflor from "../images/joyascolordeflor.jpg"
import proseek from "../images/proseek.jpg"
import casarino from "../images/casarino.jpg"
import rosesandtea from "../images/rosesandtea.jpg"

function Webs({img}) {
  return (
    <section className="df wp jcc aic pagesWeb">
        <a href="https://toydealershop.com" target="_blank" className="df jcc">
          {img === "toydealer" ? <img src={img === "toydealer" ? toydealer : null} alt="Toy Dealer Shop"  /> : null}
        </a>
        <a href="https://joyascolordeflor.com" target="_blank" className="df jcc">
          {img === "joyascolordeflor" ? <img src={img === "joyascolordeflor" ? joyascolordeflor : "null"} alt="Joyas Color de Flor"  /> : null}
        </a>
        <a href="http://proseek.com.ar" target="_blank" className="df jcc">
          {img === "proseek" ? <img src={img === "proseek" ? proseek : null} alt="Proseek Argentina"  /> : null}
        </a>
        <a href="http://josecasarino.com" target="_blank" className="df jcc">
          {img === "casarino" ? <img src={img === "casarino" ? casarino : null} alt="Casarino & Asoc"  /> : null}
        </a>
        <a href="https://delficasarino.github.io/RosesAndTea/" target="_blank" className="df jcc">
          {img === "rosesandtea" ? <img src={img === "rosesandtea" ? rosesandtea : null} alt="Roses and Tea"  /> : null}
        </a>
    </section>
  );
}

export default Webs;