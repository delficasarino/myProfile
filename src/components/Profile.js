import React from "react";
import '../css/profile.css';

function Profile({active}) {
  return (
    <section className={`profile df wp jcc aic ${active ? "active" : null}`}>
      <p className="text">Soy Licenciada en Publicidad, en el 2021 realicé el curso de Full Stack Developer Node en Digital House y desde ese momento me enfoqué en dedicarme a la carrera de programación web.
      <br/><br/>
      Me motiva trabajar en empresas con ambientes dinámicos en donde se me permita desarrollar mis habilidades y crecer profesionalmente.</p>
    </section>
  );
}

export default Profile;