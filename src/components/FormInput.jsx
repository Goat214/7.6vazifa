import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function FormInput({ label, type, name }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend text-white lg:text-black">
        {label}
      </legend>

      <div className="relative">
        <input
          type={isPassword && showPassword ? "text" : type}
          name={name}
          className="input w-full pr-10"
          placeholder="Type here"
        />

        {isPassword && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute text-[20px]  right-3 top-2.5 cursor-pointer text-black"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        )}
      </div>
    </fieldset>
  );
}

export default FormInput;
/*
function FormInput({label, type, name}) {
  return (
    <fieldset className="fieldset ">
      <legend className="fieldset-legend text-white lg:text-black">{label}</legend>
      <input type={type} name={name} className="input" placeholder="Type here" />
      <p className="label text-white lg:text-black">Optional</p>
    </fieldset> 
  );
}

export default FormInput;    tufirlab ber 
 */