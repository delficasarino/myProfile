import React, { useState } from "react";
import Webs from './Webs';
import '../css/activeWebs.css';
import rosesandtea from "../images/rosesandtea.jpg"

function ProgressWebs({active}) {
  const [page, setPage] = useState("rosesandtea");

  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        <img src={rosesandtea} alt="Roses and Tea" onClick={() => setPage("rosesandtea")} />
      </article>
      <article>
            {page === "rosesandtea" ? <Webs img="rosesandtea"/> : null}
      </article>
    </section>
  );
}

export default ProgressWebs;