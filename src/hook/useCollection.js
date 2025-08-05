import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (colName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, colName), (snapshot) => {
      let data = [];
      snapshot.docs.forEach((user) => {
        data.push({ id: user.id, ...user.data() });
      });
      setData(data);
      setLoading(false);  
    });
    return () => unsubscribe();
  }, [colName]);

  return { data, loading };  
};
