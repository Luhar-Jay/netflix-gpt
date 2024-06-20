import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browes");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-gray-400 px-8 py-2 z-10 flex justify-between">
      <img className="w-48 mx-24 " src={LOGO} alt="Logo" />
      {user && (
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-md"
            alt="usericon"
            src={user?.photoURL}
          />
          <button
            className="text-center p-1 px-2 bg-red-600 rounded-lg m-1 font-bold text-white"
            onClick={handleSignout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
