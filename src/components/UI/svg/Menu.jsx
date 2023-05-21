import React from "react";
import Dot from "./Dot";
import styles from "../../../css/modules/Menu.module.css";

const Menu = ({ isActive, setIsActive }) => {
  return (
    <div
      className={styles.Menu}
      onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
    >
      <Dot />
      <Dot />
      <Dot />
    </div>
  );
};

export default Menu;
