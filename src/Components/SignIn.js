// src/components/SignIn.js
import React from "react";
import { Container } from "react-bootstrap";
import FirebaseAuthUI from "./FirebaseAuthUI";
import Navbar1 from "./Navbar";

const SignIn = () => {
  return (
    <div>

      <Container className="mt-5">
        <h2 className="mb-4">Sign In</h2>
        <FirebaseAuthUI />
      </Container>
    </div>
  );
};

export default SignIn;
