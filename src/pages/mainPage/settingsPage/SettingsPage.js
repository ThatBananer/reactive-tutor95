import React, { useState, useEffect } from "react";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../services/fireBaseServicer";
import "./SettingsPage.css";
import { searchData } from "../../../services/searchUtils";
import { getDoc } from "firebase/firestore";

const TutorPage = () => {
  //const [formData, setFormData] = useState(defaultFormData);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userData === null) {
      // Check if a user is authenticated before making requests
      if (auth.currentUser) {
        searchData(auth.currentUser.uid);

        const fetchUserData = async () => {
          try {
            const userDocRef = doc(db, "Users", auth.currentUser.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (userDocSnapshot.exists()) {
              // User document exists, retrieve data
              const userData = userDocSnapshot.data();
              setUserData(userData);

              setName(userData.name);
              setContactEmail(userData.contactEmail);
              setBio(userData.bio);
              setGrade(userData.grade);
              setIsTutor(userData.isTutor);
              setCourseId(userData.classTakenList);
            } else {
              // User document does not exist, handle the case accordingly
            }
          } catch (error) {
            // Handle errors here
            console.error("Error fetching user data:", error);
          }
        };

        // Fetch user data when the component mounts or when the user is authenticated
        fetchUserData();
      } else {
        // Handle the case where there is no authenticated user (auth.currentUser is null)
        console.log("No authenticated user.");
      }
    }
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("freshman");
  const [courseId, setCourseId] = useState("");
  const [isTutor, setIsTutor] = useState(false);
  const [bio, setBio] = useState("");
  const [phone, setPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [showInfoToOthers, setShowInfoToOthers] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleCourseIdChange = (e) => {
    setCourseId(e.target.value);
  };

  const handleTutorStatusChange = (e) => {
    setIsTutor(e.target.checked);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
  };

  const handleShowInfoToOthersChange = (e) => {
    setShowInfoToOthers(e.target.checked);
  };

  function classTakenListMaker(input) {
    // Remove any spaces before or after the input string
    input = input + "";
    input = input.trim();

    // Split the input string into an array of words using commas as separators
    const wordsArray = input.split(",").map((word) => word.trim());

    return wordsArray;
  }

  const handleSaveSettings = async (e) => {
    // Perform save settings logic here
    //e.preventDafault()
    await setDoc(doc(db, "Users", auth.currentUser.uid), {
      LastUpdated: serverTimestamp(),
      name: name,
      //email: email,
      grade: grade,
      classTakenList: classTakenListMaker(courseId), //classesTakenListValue
      phone: phone,
      contactEmail: contactEmail, //contact email value
      bio: bio,
      isTutor: showInfoToOthers,
    });
    //TODO add update password if different from current
  };

  return (
    <div className="overFlow">
      <div className="settings-container">
        <h2>Account Information</h2>
        <p>Fill this form out and hit save to be listed as a tutor!</p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <h2>Grade</h2>
        <div className="form-group">
          <label htmlFor="grade">Select Grade:</label>
          <select id="grade" value={grade} onChange={handleGradeChange}>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="Masters Student">Masters Student</option>
            <option value="Phd Student">Phd Student</option>
            <option value="Graduated">Graduated</option>
          </select>
        </div>
        <hr></hr>
        <h2>List of Classes Taken</h2>
        <div className="form-group">
          <label htmlFor="course-id">Course IDs:</label>
          <p>Please write in the following format.</p>
          <p style={{ color: "red", fontWeight: "bold" }}>
            "classID1,classID2,classID3,classID4,..."
          </p>
          <p style={{ fontWeight: "bold" }}>
            If it is not written like it is above then your profile will not
            show up in search
          </p>
          <input
            type="text"
            id="course-id"
            value={courseId}
            onChange={handleCourseIdChange}
          />
        </div>
        <hr></hr>

        <h2>Bio</h2>
        <div className="form-group">
          <textarea id="bio" value={bio} onChange={handleBioChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="contact-email">Contact Email:</label>
          <input
            type="email"
            id="contact-email"
            value={contactEmail}
            onChange={handleContactEmailChange}
          />
        </div>

        {/* <h2>Privacy Settings</h2>
        <div className="form-group">
          <label htmlFor="privacy-options">
            Show my profile as an available tutor
            <input
              type="checkbox"
              id="privacy-options"
              checked={showInfoToOthers}
              onChange={handleShowInfoToOthersChange}
            />
          </label>
        </div> */}

        <button className="save-button" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default TutorPage;
