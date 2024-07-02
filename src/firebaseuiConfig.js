// src/firebaseuiConfig.js
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";

// Firebase UI configuration
const uiConfig = {
  signInSuccessUrl: '/', // Redirect to the homepage after sign-in
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
    // You can add more providers here
  ],
  tosUrl: '/terms-of-service', // Terms of service URL
  privacyPolicyUrl: '/privacy-policy' // Privacy policy URL
};

const auth = getAuth();
const ui = new firebaseui.auth.AuthUI(auth);

export { ui, uiConfig };
