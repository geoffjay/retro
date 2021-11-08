import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

export const fetchAllRetros = createAsyncThunk("retro/fetchAll", async () => {
  var retros = [];
  try {
    // .where("owner", "==", user.email)
    const querySnapshot = await getDocs(collection(db, "retros"));
    querySnapshot.forEach(doc => {
      retros.push(doc.data());
    });
  } catch (error) {
    console.error(error);
    // rejectWithValue({ error: error.message });
  }
  return retros;
});
