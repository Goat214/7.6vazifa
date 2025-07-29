import { useState, useEffect } from "react";
import axios from "axios";

const useFatch = (url) => {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    axios(url)
      .then((res) => {
        console.log("Javob ma'lumotlari:", res.data); 
        setImages(res.data);
      })
      .catch((err) => setError(err));
  }, [url]);

  return { images, error };
};

export default useFatch;
