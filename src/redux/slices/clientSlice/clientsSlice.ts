import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, googleProvider } from "../../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { setFirestoreDatabaseById } from "../../../firebase/firebaseDatabase";
import { IClient } from "../../../types/client";

interface IClientState {
  clients: IClient[];
}

const initialState: IClientState = {
  clients: [],
};

export const login = createAsyncThunk("client/auth", async () => {
  try {
    const { user } = await signInWithPopup(auth, googleProvider);
    const { uid, displayName, email } = user;

    const client = {
      uid: uid as string,
      name: displayName as string,
      email: email as string,
      role: "user",
    };

    setFirestoreDatabaseById(client);

    return { uid, displayName, email };
  } catch (e) {
    console.error(e);
  }
});

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action);
      const payload = action.payload;
      const client = {
        uid: payload?.uid as string,
        name: payload?.displayName as string,
        email: payload?.email as string,
        role: "user",
      };

      state.clients.push(client);
    });
  },
});
