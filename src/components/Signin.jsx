import React, { useEffect, useState } from "react";
import { auth, googleProvider } from "./Config";
import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import Account from "./Account";

const Signin = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    if (storedUserEmail) {
      setUserEmail(storedUserEmail);
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUserEmail(result.user.email);
      localStorage.setItem("userEmail", result.user.email);
      // console.log("User Data:", result.user);
      console.log(
        "User Data:",
        result.user.email,
        result.user.displayName,
        result.user.photoURL
      );
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);

      setUserEmail(result.user.email);
      localStorage.setItem("userEmail", result.user.email);
      // console.log("User Data:", result.user);
      console.log(
        "User Data:",
        result.user.email,
        result.user.displayName,
        result.user.photoURL
      );
    } catch (error) {
      console.error("Error signing in with Facebook: ", error);
    }
  };

  const handleLogout = () => {
    setUserEmail("");
  };

  return (
    <div className="flex justify-center mt-[10rem]">
      <div className="flex flex-col gap-2 bg-white p-8 w-[450px] rounded-2xl shadow-lg mt-8">
        {userEmail ? (
          <Account userEmail={userEmail} onLogout={handleLogout} />
        ) : (
          <>
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full h-12 border-2 border-gray-300 rounded-lg transition duration-200 hover:border-blue-500">
              <svg
                version="1.1"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-current text-gray-700">
                <path
                  style={{ fill: "#FBBB00" }}
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                  c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                  C103.821,274.792,107.225,292.797,113.47,309.408z"></path>
                <path
                  style={{ fill: "#518EF8" }}
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                  c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                  c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"></path>
                <path
                  style={{ fill: "#28B446" }}
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                  c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                  c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"></path>
                <path
                  style={{ fill: "#F14336" }}
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                  c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                  C318.115,0,375.068,22.126,419.404,58.936z"></path>
              </svg>
              Google
            </button>
            <button
              onClick={handleFacebookSignIn}
              className="flex items-center justify-center w-full h-12 border-2 border-gray-300 rounded-lg transition duration-200 hover:border-blue-500">
              <svg
                version="1.1"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current text-gray-700">
                <path d="M22.675 0h-21.35C.592 0 0 .592 0 1.326v21.351C0 23.408.592 24 1.326 24h11.494v-9.294H9.846v-3.622h2.974V8.408c0-2.94 1.797-4.541 4.423-4.541 1.257 0 2.336.093 2.65.135v3.076l-1.82.001c-1.427 0-1.7.677-1.7 1.668v2.186h3.403l-.444 3.622h-2.959V24h5.788C23.408 24 24 23.408 24 22.676V1.326C24 .592 23.408 0 22.675 0z"></path>
              </svg>
              Facebook
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Signin;
