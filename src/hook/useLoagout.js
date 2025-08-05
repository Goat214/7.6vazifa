import { useState } from "react";
import { logOut } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useLogout = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const logout = async () => {
    setIsPending(true);
    try {
      const user = doc(db, 'users', auth.currentUser.uid)
      await updateDoc(user,{
        online: false
      })
      await signOut(auth);
      dispatch(logOut());
      toast.success("See you")
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsPending(false)
    }
  };
  return {logout, isPending}
};
