import React from "react";
import style from "../../../css/modules/Pen.module.css";

function Pen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="31"
      fill="none"
      viewBox="0 0 25 31"
      className={style.Pen}
    >
      <path
        fill="#fff"
        d="M18.333.934l4.375 4.375-3.335 3.337-4.375-4.375L18.333.934zM.833 18.417v4.375h4.375l12.103-12.086-4.375-4.375L.833 18.417zm0 8.75h23.334v2.916H.833v-2.916z"
      ></path>
    </svg>
  );
}

export default Pen;
