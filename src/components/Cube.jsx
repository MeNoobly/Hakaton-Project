import React, { useState } from "react";
import styles from "../css/modules/Cube.module.css";
import Menu from "./UI/svg/Menu";
import Button from "./UI/Button";
import Pen from "./UI/svg/Pen";
import Trash from "./UI/svg/Trash";

const Cube = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className={styles.Cube}>
        <div className={styles.Group}>
          <p>Cube.Moscow</p>
          <Menu isActive={isActive} setIsActive={setIsActive} />
        </div>
        {isActive && (
          <div className={styles.ButtonGroup}>
            <Button>
              <div className={styles.Icon}>
                <Pen />
              </div>
              Редактировать площадку
            </Button>
            <Button>
              <div className={styles.Icon}>
                <Trash />
              </div>
              Удалить площадку
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cube;
