// src/components/FirebaseAuthUI.js
import React, { useEffect } from "react";
import { ui, uiConfig } from "../firebaseuiConfig";
import { Container } from "react-bootstrap";

const FirebaseAuthUI = () => {
  useEffect(() => {
    const firebaseAuthContainer = document.getElementById("firebaseui-auth-container");
    if (firebaseAuthContainer) {
      ui.start("#firebaseui-auth-container", uiConfig);
    }
  }, []);

  return (
    <Container className="mt-5">
      <div id="firebaseui-auth-container"></div>
    </Container>
  );
};

export default FirebaseAuthUI;
