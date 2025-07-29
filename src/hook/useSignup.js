import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { toast } from "react-toastify";

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
        photoURL: "https://api.dicebear.com/9.x/lorelei/svg?seed=" + displayName,
      });

      dispatch(login(req.user));
      toast.success(`Welcome ${req.user.displayName}`);
      
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { signup, isPending };
};
