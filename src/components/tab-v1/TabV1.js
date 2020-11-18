import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TabV1.module.scss";

const TabV1 = (props) => {
  const { titles } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.tab}>
      {titles.map((item, index) => {
        const classes = `${styles.tabItem} ${
          index === activeIndex ? styles.active : ""
        }`;

        return (
          <div
            className={classes}
            onClick={() => handleTabClick(index)}
            key={item}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

TabV1.propTypes = {
  titles: PropTypes.array.isRequired,
};

export default TabV1;
