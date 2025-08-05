import React, { Fragment, useState } from "react";
import useFatch from "../hook/useFatch";
import toast, { Toaster } from "react-hot-toast";
import { useCollection } from "../hook/useCollection";
import UserCard from "../components/UserCard";
import LoadingCard from "./LoadingCard";

const ACCESS_KEY = "74y5bYvkSO9WoY_E1KBgLOh8moLeSlOA3xoGLX0Bqa0";

function Home() {
  const { data: users, loading } = useCollection("users"); 
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
    <div className="max-w-6xl flex px-4 mx-auto items-start mt-10 mb-20 gap-6">
      <div className="w-[800px]"></div>

      <div className="w-[357px] bg-white rounded-xl shadow-lg border border-gray-300 p-6 space-y-4">
        <Toaster position="top-right" reverseOrder={false} />
        
        {loading && <LoadingCard />}

        {!loading && users && users.length > 0 && (
          users.map((user) => (
            <Fragment key={user.id}>
              <UserCard user={user} />
            </Fragment>
          ))
        )}

        {!loading && users && users.length === 0 && (
          <p className="text-center text-gray-500">Foydalanuvchilar topilmadi.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
