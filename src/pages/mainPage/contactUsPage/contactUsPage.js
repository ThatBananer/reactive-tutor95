import React from "react";
import styles from './contactUsPage.module.css'
import { Link } from "react-router-dom";

function ContactUsPage(){
    return(
        <div className={styles.overFlow}>
        <div className={styles.container}>
            <h4>Contact Us</h4>
            <h6>Problems?</h6>
            <p>We know at this time the site is bare bonds so if you have any major issue please let us know. We want to improve this site as much as possible. We are busy but will do our best to help with any issues you may have.</p>
            <p>So if you have any comments, questions, concerns, or want to help with the project reach out to us.</p>
            <h6>Thanks =D  !</h6>
            <Link>classalumntutors@gmail.com</Link>
        </div>
        </div>
    )
}

export default ContactUsPage;