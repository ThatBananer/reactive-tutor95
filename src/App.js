import "./App.css";
import styles from "./reactiveTutoring.module.css";
import React, { useState } from "react";

import LandingPage from "./pages/landingPage/landingPage";
import LoginPage from "./pages/loginPage/logInPage";
import Signup from "./pages/signUpPage/signUpPage";
import MainPage from "./pages/mainPage/mainPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  const { currentUser } = useContext(AuthContext);

  const [queryResults, setQueryResults] = useState(null); //defaultData()
  const updateQueryResults = (results) => {
    setQueryResults(results);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage updateQueryResults={updateQueryResults} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
