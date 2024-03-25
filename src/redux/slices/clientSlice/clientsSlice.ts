import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authClient } from "../../../firebase/firebaseAuth";
import { setFirestoreDatabaseById } from "../../../firebase/firebaseDatabase";
import { IClient } from "../../../types/client";

interface IClientState {
  clients: IClient[];
  loading: boolean;
  error: boolean;
}

const initialState: IClientState = {
  clients: [],
  loading: false,
  error: false,
};

export const login = createAsyncThunk<
  {
    uid: string | null;
    displayName: string | null;
    email: string | null;
  },
  void,
  { rejectValue: string }
>("client/auth", async (_, { rejectWithValue }) => {
  try {
    const { uid, displayName, email } = await authClient();

    const client = {
      uid: uid as string,
      name: displayName as string,
      email: email as string,
      role: "user",
    };

    setFirestoreDatabaseById("clients", client);

    return { uid, displayName, email };
  } catch (e) {
    return rejectWithValue(String(e));
  }
});

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      const payload = action.payload;
      const client = {
        uid: payload?.uid as string,
        name: payload?.displayName as string,
        email: payload?.email as string,
        role: "user",
      };

      state.loading = false;
      state.clients.push(client);
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.rejected, state => {
      state.error = true;
      state.loading = false;
    });
  },
});
