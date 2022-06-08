import React from "react";
import '../css/footer.css';

function Footer() {
  return (
    <section className="df jcc aic footer">
      <article className="contact df jcc aic wp">
        <h3 className="jcc">Contactame</h3>
        <section className="df jcc aic">
          <i class="fa-solid fa-at"></i>
          <p>delficasarino@gmail.com</p>
        </section>
        <section className="df jcc aic">
          <i class="fa-solid fa-phone"></i>
          <p>+54 9 11 3175 9280</p>
        </section>
        <section className="df jcc aic">
          <i class="fa-brands fa-github"></i>
          <p>delficasarino</p>
        </section>
      </article>
    </section>
  );
}

export default Footer;