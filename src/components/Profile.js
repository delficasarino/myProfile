import React from "react";
import "../css/profile.css";

function Profile({ active }) {
  return (
    <section className={`profile df cl jcc aic ${active ? "active" : null}`}>
      <article className="df cl boxProfile">
        <section className="df rw wp jcc aic">
          <h4>Name:</h4>
          <h4 className="textBox">María Delfina Casarino</h4>
        </section>
        <section className="df rw wp jcc aic">
          <h4>Birthday:</h4>
          <h4 className="textBox">12/06/1989</h4>
        </section>
        <section className="df rw wp jcc aic">
          <h4>Citizenship:</h4>
          <h4 className="textBox">Argentina / Italy</h4>
        </section>
      </article>
      <p>
        I have a degree in Advertising, with experience working in marketing
        departaments. In 2021 I decided to dedicate full time to the programming
        career.
      </p>
      <p>
        It motivates me to work in companies with dynamic environments where Iam
        allowed to develop my skills and grow professionally.
      </p>
      <ul>
        <h3>Soft Skills</h3>
        <li>Teamwork</li>
        <li>Constant Learning</li>
        <li>Time management</li>
        <li>Organizational</li>
        <li>Decision-making</li>
      </ul>
    </section>
  );
}

export default Profile;
