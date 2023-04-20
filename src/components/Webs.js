import React from "react";
import "../css/webs.css";
import tcrsa from "../images/tcrsa.jpg";
import toydealer from "../images/toydealer.jpg";
import mvgraficos from "../images/mvgraficos.jpg";
import proseek from "../images/proseek.jpg";
import casarino from "../images/casarino.jpg";
import rosesandtea from "../images/rosesandtea.jpg";

function Webs({ img }) {
  return (
    <section className="df wp jcc aic pagesWeb">
      <a
        href="https://southamerica.tcr-series.com/"
        target="_blank"
        className="df jcc"
      >
        {img === "tcrsa" ? (
          <img src={img === "tcrsa" ? tcrsa : null} alt="TCR South America" />
        ) : null}
      </a>
      <a href="https://toydealershop.com" target="_blank" className="df jcc">
        {img === "toydealer" ? (
          <img
            src={img === "toydealer" ? toydealer : null}
            alt="Toy Dealer Shop"
          />
        ) : null}
      </a>
      <a href="https://mv-graficos.com.ar" target="_blank" className="df jcc">
        {img === "mvgraficos" ? (
          <img
            src={img === "mvgraficos" ? mvgraficos : "null"}
            alt="MV Gráficos"
          />
        ) : null}
      </a>
      <a href="http://proseek.com.ar" target="_blank" className="df jcc">
        {img === "proseek" ? (
          <img
            src={img === "proseek" ? proseek : null}
            alt="Proseek Argentina"
          />
        ) : null}
      </a>
      <a href="http://josecasarino.com" target="_blank" className="df jcc">
        {img === "casarino" ? (
          <img
            src={img === "casarino" ? casarino : null}
            alt="Casarino & Asoc"
          />
        ) : null}
      </a>
      <a
        href="https://delficasarino.github.io/RosesAndTea/"
        target="_blank"
        className="df jcc"
      >
        {img === "rosesandtea" ? (
          <img
            src={img === "rosesandtea" ? rosesandtea : null}
            alt="Roses and Tea"
          />
        ) : null}
      </a>
    </section>
  );
}

export default Webs;
