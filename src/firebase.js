import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore /*, collection, getDocs */,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB7HTz6Xvy6_r5VycV4EgyGZRnTRK5BVLU",
  authDomain: "retro-149f2.firebaseapp.com",
  projectId: "retro-149f2",
  storageBucket: "retro-149f2.appspot.com",
  messagingSenderId: "145847648734",
  appId: "1:145847648734:web:7b88defc569237bb76dd4f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// XXX: example function
// async function getUsers(db) {
//   const usersCol = collection(db, "users");
//   const userSnapshot = await getDocs(usersCol);
//   const userList = userSnapshot.docs.map(doc => doc.data());
//   return userList;
// };

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    // add the user if they aren't found in the database
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authprovider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
  }
};

const sendPasswordResetEmail = async email => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.error(error);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};
