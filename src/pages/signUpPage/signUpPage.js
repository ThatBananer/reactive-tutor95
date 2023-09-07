// Login.js

import React, { useContext, useState } from 'react';
import styles from './signUpPage.module.css';
import { Link, useNavigate} from "react-router-dom";
import { signInWithGoogle, emailRegister, emailLogin, auth } from '../../services/fireBaseServicer';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import Logo from "../../images/ClassAlumnTutorsWhiteBackground.png"

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { dispatch } = useContext(AuthContext);

  // navigtor to next page in proccess
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => { // Add this function
    setConfirmPassword(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    


    // Check if passwords match
    if (password !== confirmPassword) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password).then(() => {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        
        navigate("/main"); // Use the navigate function to redirect after login
      });
      
      
    })
  };

  return (
    <div>
    <img src={Logo}></img>
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
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

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <br />
        
          <button type="submit" >Signup</button>
        
        <hr/>
        
      </form>
    </div>
    </div>

  );
};

export default Signup;
