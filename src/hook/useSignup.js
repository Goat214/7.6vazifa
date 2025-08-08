import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { login } from "../app/features/userSlice";
import { toast } from "react-hot-toast";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import md5 from "md5";

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

      const hash = md5(email.trim().toLowerCase());

      await updateProfile(req.user, {
        displayName,
        photoURL: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
      });

      await setDoc(doc(db, "users", req.user.uid), {
        online: true,
        displayName: displayName,
        photoURL: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
      });

      dispatch(login(req.user));
      toast.success(`Welcome ${displayName}`, { duration: 3000 });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, isPending };
};

