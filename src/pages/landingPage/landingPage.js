import React, { useState } from "react";
import styles from "./landingPage.css";
import styles1 from "./navBar.css";
import Logo from "../../images/Class Alumn Tutors.png";
import img1 from "../../images/Group2.svg";
import img2 from "../../images/Group171.svg";
import img3 from "../../images/Group108.svg";
import img4 from "../../images/Group115.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import SearchBar from "./components/searchbar";

import { auth } from "../../services/fireBaseServicer";
import { onAuthStateChanged } from "firebase/auth";
import TutorListingRepeater from "../../components/TutorListings/TutorListingRepeater";

function LandingPage() {
  const authContext = useContext(AuthContext);
  const { currentUser, dispatch } = authContext;
  const [queryResults, setQueryResults] = useState(null); //defaultData()
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  <div>
    <TutorListingRepeater queryResults={queryResults} />{" "}
  </div>;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      setIsLoggedIn(false);
    }
  });

  const handleLogout = async () => {
    try {
      await auth.signOut();
      //dispatch({ type: "LOGOUT" }); // Dispatch the logout action using the context's dispatch function
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSearch = (query) => {
    // Implement your search logic here using the 'query' parameter
  };

  const updateQueryResults = (results) => {
    setQueryResults(results);
  };

  return (
    <div>
      <div id="body" data-spy="scroll" data-target=".navbar" data-offset="100">
        <header id="header-section">
          <nav className="navbar">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={Logo} alt="Tutoring site logo" />
              </a>
              <div className="navbar-search">
                <SearchBar
                  onSearch={handleSearch}
                  updateQueryResults={updateQueryResults}
                />
              </div>
              <div>
                {isLoggedin ? (
                  // User is authenticated, show appropriate buttons
                  <>
                    <Link to="/main">
                      <button className="navbar-buttons">Tutors</button>
                    </Link>
                    <button className="navbar-buttons" onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  // User is not authenticated, show login and signup buttons
                  <>
                    <Link to="/login">
                      <button className="navbar-buttons">Login</button>
                    </Link>
                    <Link to="/signup">
                      <button className="navbar-buttons">Signup</button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>
        {/* Search Results ------------------------------------------------------------------------------------------------ */}
        <div>
          <TutorListingRepeater queryResults={queryResults} />{" "}
        </div>
        ;
        <div className="banner">
          <div className="container">
            <h1 className="font-weight-semibold">
              Tutors Who Know Your Classwork
              <br />
              From Umass Boston
            </h1>
            <h6 className="font-weight-normal text-muted pb-3">
              Get tutoring and/or make money
              that can solve your GPA and/or money problems.
            </h6>
            <div></div>
            <img src={img2} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="content-wrapper">
          <div className="container">
            <section className="features-overview" id="features-section">
              <div className="content-header">
                <h2>What is this site for?</h2>
                <h6 className="section-subtitle text-muted">
                  its a way for students to get tutoring
                  <br /> or tutor others
                </h6>
              </div>
            </section>
            <section
              className="digital-marketing-service"
              id="digital-marketing-section"
            />
            <div className="row align-items-center">
              <div
                className="col-12 col-lg-7 grid-margin grid-margin-lg-0"
                data-aos="fade-right"
              >
                <h3 className="m-0">
                  For concerned students
                  <br />
                  We can help you find a tutor!
                </h3>
                <div className="col-lg-7 col-xl-6 p-0">
                  <p className="py-4 m-0 text-muted">
                    Taking a hard class this semester? We can help find someone 
                    who's taken it at UMB.
                  </p>
                  <p className="font-weight-medium text-muted">
                    Someone at UMB whos taken that hard class might be on the
                    site as a Tutor!{" "}
                  </p>
                </div>
              </div>
              <div
                className="col-12 col-lg-5 p-0 img-digital grid-margin grid-margin-lg-0"
                data-aos="fade-left"
              >
                <img src={img3} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="row align-items-center">
              <div
                className="col-12 col-lg-7 text-center flex-item grid-margin"
                data-aos="fade-right"
              >
                <img src={img4} alt="" className="img-fluid" />
              </div>
              <div
                className="col-12 col-lg-5 flex-item grid-margin"
                data-aos="fade-left"
              >
                <h3 className="m-0">
                  For confident students
                  <br />
                  we can help get you people to tutor!
                </h3>
                <div className="col-lg-9 col-xl-8 p-0">
                  <p className="py-4 m-0 text-muted">
                    So you've taken some hard classes and think you can make some
                    money? Use this site to connect you to
                    people looking for help
                  </p>
                  <p className="pb-2 font-weight-medium text-muted">
                    Make your profile to get access to UMB
                    students who want tutoring in the classes you've mastered!
                  </p>
                </div>
              </div>
            </div>
            <footer className="border-top">
              <p className="text-center text-muted pt-4">
                Copyright © ???? ~ Just a student who couldn't find physics 2
                tutors who were good lol
              </p>
              <p className="text-center text-muted pt-4">
                With any comments questions or concerns please email us at :
              </p>
              <p className="text-center text-muted pt-4">
                <Link>classalumntutors@gmail.com</Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
