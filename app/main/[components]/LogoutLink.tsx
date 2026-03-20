"use client"

import { UserAuth } from "@/app/context/auth-context";
import { redirect } from "next/navigation";

const LogoutLink = () => {
  const { logOut } = UserAuth();

  const logUserOut = () => {
    logOut();
    localStorage.removeItem("adminStatus");
    redirect("/login")
  };

  return (
    <button
      onClick={logUserOut}
      className="hover:text-gray-500 transition-all duration-100 ease-in pointer"
    >
      लॉग आउट करें
    </button>
  );
};

export default LogoutLink;
