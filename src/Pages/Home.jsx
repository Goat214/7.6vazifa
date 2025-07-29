import React, { useState } from "react";
import useFatch from "../hook/useFatch";
import ImageCard from "../components/ImageCard";
import toast, { Toaster } from "react-hot-toast";

const ACCESS_KEY = "74y5bYvkSO9WoY_E1KBgLOh8moLeSlOA3xoGLX0Bqa0";

function Home() {
  const [searchParams, setSearchParams] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchParams.trim()) {
      toast.error("Iltimos, izlash maydonini to‘ldiring!");
      return;
    }

    setUrl(
      `https://api.unsplash.com/search/photos?query=${searchParams}&per_page=30&client_id=${ACCESS_KEY}`
    );
  };

  const { images, error } = useFatch(url);

  return (
    <div className="max-w-6xl px-4 mx-auto flex flex-col items-center mt-10 mb-20">
  <Toaster position="top-right" reverseOrder={false} />

  <form onSubmit={handleSubmit} className="mb-6">
    <input
      type="search"
      placeholder="Search images..."
      className="px-4 py-2 border rounded-md shadow-md focus:outline-none flex-grow"
      onChange={(e) => setSearchParams(e.target.value)}
    />
    <button
      type="submit"
      className="ml-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow"
    >
      Search
    </button>
  </form>

  {!url && (
    <p className="text-center mt-6 text-gray-500">
      Iltimos, rasm qidirish uchun yuqoridagi qidiruv maydonidan foydalaning.
    </p>
  )}

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
    {images &&
      images.results.map((image, index) => (
        <ImageCard key={image.id + index} image={image} />
      ))}
  </div>
</div>

  );
}

export default Home;
