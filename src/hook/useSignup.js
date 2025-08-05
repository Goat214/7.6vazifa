import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../app/features/userSlice";
import { toast } from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const useSignup = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  const signup = async (displayName, email, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Authentication failed");
      }

      await updateProfile(req.user, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/lorelei/svg?seed=" + displayName,
      });

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        online: true,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
      });

      dispatch(login(req.user));
      toast.success(`Welcome ${req.user.displayName}`, {
        duration: 3000, // 3 soniya
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, isPending };
};
