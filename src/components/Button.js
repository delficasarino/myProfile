import React from "react";
import "../css/buttons.css";

function Button({ name, onClick, active }) {
  return (
    <button className={`button ${active ? "active" : null}`} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
