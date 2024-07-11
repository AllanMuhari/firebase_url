import React from "react";
import { auth } from "./Config";

const Account = ({ userEmail, onLogout }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("userEmail");
      onLogout();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email: {userEmail}</p>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;
