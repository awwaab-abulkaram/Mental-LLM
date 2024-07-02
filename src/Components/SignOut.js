// src/components/SignOut.js
import React from "react";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const SignOut = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("Signed out successfully!");
    } catch (error) {
      console.error("Error signing out: ", error);
      alert(error.message);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOut;
