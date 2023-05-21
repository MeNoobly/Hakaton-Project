import React from "react";
import style from "../../../css/modules/Trash.module.css";

function Trash() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="31"
      fill="none"
      viewBox="0 0 27 31"
      className={style.Trash}
    >
      <path
        fill="#fff"
        d="M4.75 8.208H3.292v18.959a2.917 2.917 0 002.916 2.916h14.584a2.917 2.917 0 002.916-2.916V8.208H4.75zm5.833 17.5H7.667V12.583h2.916v13.125zm8.75 0h-2.916V12.583h2.916v13.125zm.902-21.875L17.875.917h-8.75l-2.36 2.916H.375V6.75h26.25V3.833h-6.39z"
      ></path>
    </svg>
  );
}

export default Trash;
