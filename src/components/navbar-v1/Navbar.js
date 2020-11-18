import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = (props) => {
  const { leftSlot, rightSlot } = props;

  return (
    <nav className={styles.nav}>
      <div className={styles.navItem}>{leftSlot}</div>
      <div className={styles.navItem}>{rightSlot}</div>
    </nav>
  );
};

export default Navbar;
