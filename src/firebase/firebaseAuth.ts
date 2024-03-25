import { auth, googleProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export const authClient = async () => {
  const { user } = await signInWithPopup(auth, googleProvider);
  const { uid, displayName, email } = user;

  return { uid, displayName, email };
};
