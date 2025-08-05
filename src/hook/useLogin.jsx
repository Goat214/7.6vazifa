import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { toast } from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";

export const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const loginUser = async (email, password) => {
    setIsPending(true);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      if (!res.user) {
        throw new Error("Authentication failed");
      }

      const user = doc(db, "users", auth.currentUser.uid);
      await updateDoc(user, {
        online: true,
      });

      dispatch(
        login({
          uid: res.user.uid,
          email: res.user.email,
          displayName: res.user.displayName,
          photoURL: res.user.photoURL,
        })
      );

      toast.success(`Welcome back, ${res.user.displayName || res.user.email}!`);
    } catch (error) {
      toast.error(error.message || "Login failed");
    } finally {
      setIsPending(false);
    }
  };

  return { login: loginUser, isPending };
};
