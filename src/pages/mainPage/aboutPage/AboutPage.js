import React from "react";
import styles from './aboutPage.module.css'

function AboutPage(){
    return(
        <div className={styles.overFlow}>
        <div className={styles.container}>
            <h4>About us</h4>
            <h6>Who We Are</h6>
            <p>We are some Umass Boston Students who onceupon a time looked for tutors for difficult classes and coulndt find anyone willing.</p>
            <h6>Our Mission</h6>
            <p>We want to provide a place to solve the problem we had. We want to make a place for Students to find help easily and reliably. From the start of their time at UMB to the end of their time at UMB. So they can have support from 100 level courses to 400 level courses </p>
            <p>~BLANK</p>
        </div>
        </div>
    )
}

export default AboutPage;