import React, { useEffect } from "react";
import styles from "./SideBar.module.css";
import { auth } from "../../services/fireBaseServicer";
import Logo from "../../images/ClassAlumnTutorsWhiteBackground.png";

function SideBar({ onSelect }) {
  const [isLoggedin, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        // User is signed in, you can perform any necessary actions here
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleOptionClick = (option) => {
    onSelect(option);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logoImg}>
        <img src={Logo} alt="Logo" className={styles.logoImg} />
      </div>
      <h4>Dashboard</h4>
      <ul className={styles.navigation}>
        {isLoggedin ? (
          <div>
            <li
              className={styles.navigationLi}
              onClick={() => handleOptionClick("settings")}
            >
              {/* <img src="settings.png" alt="Settings" className={styles.navIcon} /> */}
              <span>Profile Setup</span>
            </li>
            <hr></hr>
          </div>
        ) : (
          <div></div>
        )}

        <li
          className={styles.navigationLi}
          onClick={() => handleOptionClick("about")}
        >
          {/* <img src="about.png" alt="About Us" className={styles.navIcon} /> */}
          <span>About Us</span>
        </li>
        <hr></hr>

        <li
          className={styles.navigationLi}
          onClick={() => handleOptionClick("contactUs")}
        >
          <span>Contact Us</span>
        </li>
        <hr></hr>
      </ul>
    </div>
  );
}

export default SideBar;
