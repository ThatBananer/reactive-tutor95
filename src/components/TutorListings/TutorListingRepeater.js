import TutorListing from "./TutorListing.js";
import styles from "./tutorListings.module.css";

function formatList(items) {
  if (!Array.isArray(items)) {
    return "Input is not a valid list.";
  }

  if (items.length === 0) {
    return "List is empty.";
  }

  // Join the array elements with ", " as the separator
  return items.join(", ");
}

function TutorListingRepeater({ queryResults }) {
  return (
    // profileName, profileBio, profileGrade, profileClassTakenList
    <div className={styles.overFlow}>
      {queryResults === null ? (
        <div></div>
      ) : (
        <div className={styles.grid}>
          {queryResults.map((tutorUser) => (
            <TutorListing
              profileName={tutorUser.name}
              profileBio={tutorUser.bio}
              profileGrade={tutorUser.grade}
              profileClassTakenList={formatList(tutorUser.classTakenList)}
              profileContact={tutorUser.contactEmail}
              profileisTutor={tutorUser.profileisTutor}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TutorListingRepeater;

//<TutorListingRepeater queryResults = {FakeFireBaseQueryResults} />
