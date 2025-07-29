import React, { useState } from "react";
import FormInput from "../components/FormInput";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignup } from "../hook/useSignup";

function Signup() {
  const [error, setError] = useState("");
  const { isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    if (!formData.get("displayName")) {
      toast.warning("Display Name maydonini to'ldiring!");
      return;
    }
    if (!formData.get("email")) {
      toast.warning("Email maydonini to'ldiring!");
      return;
    }
    if (!formData.get("password")) {
      toast.warning("Password maydonini to'ldiring!");
      return;
    }
    if (!formData.get("confirmPassword")) {
      toast.warning("Confirm Password maydonini to'ldiring!");
      return;
    }

    

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      setError("Parollar mos kelmayapti!");
      return;
    }

    setError("");
    console.log(displayName, email, password);
    signup(
      displayName,
      email,
      password,
    );
  };

  return (
    <main>
      <div className="regestration lg:flex hidden h-full grow w-1/4"></div>
      <div className="regestration grow lg:bg-none grid place-items-center relative">
        <div className="fixed top-0 left-0 bottom-0 w-full bg-black/60 lg:hidden z-10 h-screen"></div>
        <div className="relative z-20 bg-black/40 box lg:bg-white  rounded-lg shadow-lg p-8 w-96 ">
          <div>
            <h3 className="text-3xl mb-5 text-white  lg:text-black">Login</h3>
            <form onSubmit={handleSubmit} className="">
              <FormInput label="displayName" name="displayName" type="text" />
              <FormInput label="Email" name="email" type="email" />

              <FormInput label="Password" name="password" type="password" />
              <FormInput
                label="Repaird Password"
                name="confirmPassword"
                type="password"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <ToastContainer />

              <div className="mt-10 flex justify-between">
                {isPending&&<button type="submit" className="btn btn-primary" disabled>
                  loading...
                </button>}
               {!isPending&& <button type="submit" className="btn btn-primary">
                  Signup
                </button>}
                {!isPending&&<button
                  type="button"
                  className="btn flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200"
                >
                  <FcGoogle />
                  Google
                </button>}
              </div>
              <p className="mt-6 text-center text-white lg:text-gray-700">
                Ro'yxatdan o'tganmisiz?
                <Link
                  to="/login"
                  className="text-blue-600 ml-6 hover:underline"
                >
                  kirish
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Signup;
