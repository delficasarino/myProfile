import React, { useState } from "react";
import "../css/activeWebs.css";
import Webs from "./Webs";
import tcrsa from "../images/tcrsa.jpg";
import toydealer from "../images/toydealer.jpg";
import mvgraficos from "../images/mvgraficos.jpg";
import proseek from "../images/proseek.jpg";
import casarino from "../images/casarino.jpg";

function ActiveWebs({ active }) {
  const [page, setPage] = useState("tcrsa");
  const [image, setImage] = useState(tcrsa);
  const [site, setSite] = useState("www.google.com");

  const pages = [
    { nombre: "tcrsa", image: tcrsa, site: "https://toydealershop.com" },
    { nombre: "toydealer", image: toydealer, site: "www.google.com.ar" },
    {
      nombre: "mvgraficos",
      image: mvgraficos,
      site: "http://mv-graficos.com.ar",
    },
    { nombre: "proseek", image: proseek, site: "http://proseek.com.ar" },
    { nombre: "casarino", image: casarino, site: "http://josecasarino.com" },
  ];

  return (
    <section className={`webs df wp jcc aic ${active ? "active" : null}`}>
      <article className="image df jcc aic wp">
        {pages &&
          pages.length > 0 &&
          pages.map((p) => {
            return (
              <img
                src={p.image}
                alt={p}
                onClick={() => {
                  setPage(p.nombre);
                  setImage(p.image);
                  setSite(p.site);
                }}
              />
            );
          })}
      </article>
      <article>
        <Webs img={image} page={page} site={site} />
      </article>
    </section>
  );
}

export default ActiveWebs;
