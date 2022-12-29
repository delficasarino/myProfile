import React, { useState } from "react";
import "../css/activeWebs.css";
import Webs from "./Webs";
import toydealer from "../images/toydealer.jpg";
import mvgraficos from "../images/mvgraficos.jpg";
import proseek from "../images/proseek.jpg";
import casarino from "../images/casarino.jpg";

function ActiveWebs({ active }) {
  const [page, setPage] = useState("toydealer");

  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        <img
          src={toydealer}
          alt="Toy Dealer Shop"
          onClick={() => setPage("toydealer")}
        />
        <img
          src={mvgraficos}
          alt="MV Gráficos"
          onClick={() => setPage("mvgraficos")}
        />
        <img
          src={proseek}
          alt="Proseek Argentina"
          onClick={() => setPage("proseek")}
        />
        <img
          src={casarino}
          alt="Casarino & Asoc"
          onClick={() => setPage("casarino")}
        />
      </article>
      <article>
        {page === "toydealer" ? <Webs img="toydealer" /> : null}
        {page === "mvgraficos" ? <Webs img="mvgraficos" /> : null}
        {page === "proseek" ? <Webs img="proseek" /> : null}
        {page === "casarino" ? <Webs img="casarino" /> : null}
      </article>
    </section>
  );
}

export default ActiveWebs;
