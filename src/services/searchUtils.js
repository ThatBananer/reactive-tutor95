import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./fireBaseServicer";

class TutorUser {
  constructor(docData) {
    this.name = docData.name;
    this.bio = docData.bio;
    this.classTakenList = docData.classTakenList;
    this.grade = docData.grade;
    this.contactEmail = docData.contactEmail;
    this.isTutor= docData.isTutor
  }
}

// - - - - - - - - Search with Search Bar  - - - - - - - - //
export async function searchData(searchQuery) {
  const dbRef = collection(db, "Users");
  const rQuery = query(
    dbRef,
    where("classTakenList", "array-contains", searchQuery),
    where("isTutor", "==", true)
  );
  const querySnapShot = await getDocs(rQuery);
  const searchData = [];

  querySnapShot.forEach((doc) => {
    const user = new TutorUser(doc.data());
    searchData.push(user);
  });

  return searchData;
}

export async function defaultData() {
  try {
    const usersCollectionRef = collection(db, "Users");
    const querySnapshot = await getDocs(usersCollectionRef);

    const usersData = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        // Extract the data from each document
        const userData = new TutorUser(doc.data());
        usersData.push(userData);
      }
      console.log(usersData)
    });

    // You can return the data or use it as needed
    return usersData;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching users:", error);
    return [];
  }
}
