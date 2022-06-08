import React, { useState } from "react";
import '../css/pages.css';
import Button from './Button';
import Profile from './Profile';
import ActiveWebs from './ActiveWebs';
import ProgressWebs from './ProgressWebs';

function Pages() {
  const [tag, setTag] = useState("profile");

  return (
    <section className="df wp jcc aic t-wp pages">
        <article className="df wp jcb fx-auto tags">
            <Button name="Sobre Mi" onClick={() => setTag("profile")} active={tag === "profile" ? true : false}/>
            <Button name="Proyectos Activos" onClick={() => setTag("activeWebs")} active={tag === "activeWebs" ? true : false}/>
            <Button name="Proyectos en Proceso" onClick={() => setTag("processWeb")} active={tag === "processWeb" ? true : false}/>
        </article>
        <article className="df wp jcc aic fx-auto">
            {tag === "profile" ? <Profile active={tag === "profile" ? true : false}/> : null}
            {tag === "activeWebs" ? <ActiveWebs active={tag === "activeWebs" ? true : false}/> : null}
            {tag === "processWeb" ? <ProgressWebs active={tag === "processWeb" ? true : false}/> : null}
        </article>
    </section>
  );
}

export default Pages;