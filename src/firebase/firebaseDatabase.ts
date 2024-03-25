import { db } from "../firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { IClient } from "../types/client";

export const setFirestoreDatabaseById = async (
  collection: string,
  client: IClient,
) => {
  const cityRef = doc(db, collection, `${client.uid}`);
  await setDoc(cityRef, client);
};
