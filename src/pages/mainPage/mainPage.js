import styles from "../../reactiveTutoring.module.css";
import TopBar from "../../components/TopBar/TopBar";
import SideBar from "../../components/SideBar/SideBar";
import SettingsPage from "./settingsPage/SettingsPage";
import AboutPage from "./aboutPage/AboutPage";
import ContactUsPage from "./contactUsPage/contactUsPage";
import React, { useState } from "react";

function MainPage() {
  const [selectedOption, setSelectedOption] = useState("settings");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    //TODO one of the " selectedOption === 'settings' " is doing nothing. Find out which and remove it.
    if (selectedOption === "settings") {
      return (
        <div>
          <SettingsPage />
        </div>
      );
    } else if (selectedOption === "about") {
      return (
        <div>
          <AboutPage />
        </div>
      );
    } else if (selectedOption === "profile") {
      return (
        <div>
          <SettingsPage />
        </div>
      );
    } else if (selectedOption === "contactUs") {
      return (
        <div>
          <ContactUsPage />
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.horizontalContainerSidebar}>
        <SideBar onSelect={handleOptionSelect} />
      </div>
      <div className={styles.horizontalContainerObject}>
        <TopBar />
        {renderContent()}
      </div>
    </div>
  );
}

export default MainPage;
