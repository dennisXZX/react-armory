import React from "react";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.section}>
        <h1>Apps</h1>

        <ul>
          <li>
            <Link to="/airbnb">Airbnb</Link>
          </li>
          <li>
            <Link to="/covid-v1">Covid Tracker</Link>
          </li>
          <li>
            <Link to="/facebook">Facebook</Link>
          </li>
          <li>
            <Link to="/hulu">Hulu</Link>
          </li>
          <li>
            <Link to="/instagram">Instagram Reels</Link>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h1>Components</h1>

        <ul>
          <li>
            <Link to="/card-v1">Card</Link>
          </li>
          <li>
            <Link to="/menu-v1">Menu</Link>
          </li>
          <li>
            <Link to="/menu-v2">Menu</Link>
          </li>
					<li>
            <Link to="/modal">Modal</Link>
          </li>
					<li>
            <Link to="/nav-v1">Navbar (slot feature)</Link>
          </li>
          <li>
            <Link to="/skeleton-v1">Skeleton</Link>
          </li>
          <li>
            <Link to="/tab-v1">Tabs</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Homepage;
