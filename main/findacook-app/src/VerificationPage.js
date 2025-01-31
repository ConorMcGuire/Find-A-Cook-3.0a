import React, { useEffect } from 'react';
import { FaEnvelope } from "react-icons/fa";
import "./style.css";
import "./index.css";

const VerificationPage = () => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get('error');
    const message = urlParams.get('message');

    const bodyContent = !error
  ? `<div class="verification-content">
      <h2>Email has been verified</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-check-circle-fill animated swing" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
      <h3>You can now log in</h3>
      <p>Find a Cook</p>
      <div class="form-group mt-2">
        <a href="/login" class="btn-md btn-fg btn-block">Login Now</a>
      </div>

    </div>`
  : `<div class="verification-content">
      <h2>${message}</h2>
      <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" fill="currentColor" class="bi bi-x-circle-fill animated swing" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
      <h3>Please try again!</h3>
      <p>Find A Cook</p>
      
    </div>`;

document.body.classList.add('verification-body');
document.body.innerHTML = bodyContent;

  }, []);

  return null;
};

export default VerificationPage;
