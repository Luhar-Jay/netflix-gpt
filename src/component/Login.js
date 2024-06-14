import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validation";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate to the form data
    const message = checkValidation(
      email.current.value,
      password.current.value,
      name.current.value
    );

    console.log(email.current.value);
    console.log(password.current.value);
    console.log(name.current.value);
    setErrorMessage(message);
    console.log(message);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white justify-start"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 my-4 w-full bg-transparent border border-gray-200 rounded"
        />

        <p className="text-red-500 font-bold py-2"> {errorMessage} </p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
