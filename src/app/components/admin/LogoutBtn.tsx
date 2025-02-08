"use client";
import { useAuthContext } from "@/app/context/AuthContext";
import { RiLogoutBoxLine } from "react-icons/ri";

const LogoutBtn = () => {
  const { signOutUser } = useAuthContext();

  const handleLogout = async () => {
    await signOutUser();
  };

  return (
    <button
      className="flex items-center gap-2 bg-red-500 text-white px-4 rounded"
      onClick={handleLogout}
    >
      <RiLogoutBoxLine />
      Logout
    </button>
  );
};

export default LogoutBtn;
