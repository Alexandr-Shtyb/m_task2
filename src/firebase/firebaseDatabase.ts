import { db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { IClient } from "../types/client";

export const setFirestoreDatabaseById = async (client: IClient) => {
  const cityRef = doc(db, "clients", `${client.uid}`);
  await setDoc(cityRef, {
    name: client.name,
    email: client.email,
    role: "user",
  });
};
