import React, { useEffect } from "react";
import styles from "./Menu.module.scss";

const MenuV1 = () => {
  useEffect(() => {
    const marker = document.querySelector("#marker");
    const items = document.querySelectorAll("ul li a");

    const onMouseOverHandler = (event) => {
      marker.style.top = `${event.target.offsetTop}px`;
      marker.style.width = `${event.target.offsetWidth}px`;
    };

    items.forEach((link) => {
      link.addEventListener("mouseover", onMouseOverHandler);
    });

    // Remove all mousemove listeners
    return () => {
      items.forEach((link) => {
        link.removeEventListener("mouseover", onMouseOverHandler);
      });
    };
  }, []);

  return (
    <ul className={styles.menu}>
      <div id="marker" className={styles.marker} />
      <li>
        <a href="https://dennisxiao.com/">Home</a>
      </li>
      <li>
        <a href="https://dennisxiao.com/">Team</a>
      </li>
      <li>
        <a href="https://dennisxiao.com/">About</a>
      </li>
      <li>
        <a href="https://dennisxiao.com/">Services</a>
      </li>
      <li>
        <a href="https://dennisxiao.com/">Portfolio</a>
      </li>
    </ul>
  );
};

export default MenuV1;
