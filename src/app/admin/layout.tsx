"use client";
import { FC } from "react";
import { useAuthContext } from "../context/AuthContext";

interface Props {
  children: React.ReactNode;
  login: React.ReactNode;
}

const Layout: FC<Props> = ({ children, login }) => {
  const { user } = useAuthContext();

  return <>{user.logged ? children : login}</>;
};

export default Layout;
