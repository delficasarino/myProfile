import React from "react";
import '../css/activeWebs.css';
import rosesandtea from "../images/rosesandtea.jpg"

function ProgressWebs({active}) {
  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        <img src={rosesandtea} alt="Roses and Tea" />
      </article>
    </section>
  );
}

export default ProgressWebs;