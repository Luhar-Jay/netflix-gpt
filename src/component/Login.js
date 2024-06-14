import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };
  return (
    <div>
      <Header />

      <div className="absolute bg-black">
        <img
          className="opacity-60"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgImg"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white justify-start">
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />
        <input
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSingInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
