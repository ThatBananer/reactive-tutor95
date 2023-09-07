import React from 'react';
import styles from './tutorListings.module.css'


function TutorListing({ profileName, profileBio, profileGrade, profileClassTakenList, profileContact }) {
  return (
    <div className="grid">
      <div className={styles.tutorListingBox}>
        {/* <img src={profilePic} alt="profile pic" className={styles.tutorListingPic} /> */}
        <div className={styles.tutorListingBio}>
          <p><b>{profileName}</b></p>
          <p><i>{profileGrade}</i></p>
          <p>{profileContact}</p>
          <hr></hr>

          <b>Bio</b>
          <p>{profileBio}</p>
          <hr></hr>
          <p><b>classTakenList :</b>{profileClassTakenList}</p>
        </div>
      </div>
    </div>

    );
}

export default TutorListing;
