import React, { useState } from "react";
import Webs from "./Webs";
import "../css/activeWebs.css";
import rosesandtea from "../images/rosesandtea.jpg";

function ProgressWebs({ active }) {
  const [page, setPage] = useState("rosesandtea");
  const [image, setImage] = useState(rosesandtea);
  const [site, setSite] = useState(
    "https://delficasarino.github.io/RosesAndTea/"
  );
  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        <img
          src={rosesandtea}
          alt="Roses and Tea"
          onClick={() => setPage("rosesandtea")}
        />
      </article>
      <article>
        <Webs img={image} page={page} site={site} />
      </article>
    </section>
  );
}

export default ProgressWebs;
