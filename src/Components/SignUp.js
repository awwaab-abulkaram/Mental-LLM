// src/components/SignUp.js
import React from "react";
import { Container } from "react-bootstrap";
import FirebaseAuthUI from "./FirebaseAuthUI";
import Navbar1 from "./Navbar";

const SignUp = () => {
  return (
    <div>
      <Container className="mt-5">
        <h2 className="mb-4">Sign Up</h2>
        <FirebaseAuthUI />
      </Container>
    </div>
  );
};

export default SignUp;
