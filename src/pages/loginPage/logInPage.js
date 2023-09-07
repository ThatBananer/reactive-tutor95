import React, { useContext, useState } from "react";
import styles from "./loginPage.module.css";
import { auth } from "../../services/fireBaseServicer";
import { AuthContext } from "../../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../../images/ClassAlumnTutorsWhiteBackground.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, e.g., send data to server
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      dispatch({ type: "LOGIN", payload: user });
      navigate("/main"); // Use the navigate function to redirect after login
    });
  };

  return (
    <div>
      <img src={Logo}></img>
      <div className={styles.loginContainer}>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <br />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
