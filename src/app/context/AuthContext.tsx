"use client";
import { useState, createContext, useContext, useEffect } from "react";
import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

type User = {
  logged: boolean;
  email: string | null;
  uid: string | null;
};

const AuthContext = createContext<{
  user: User;
  registerUser: (values: { email: string; password: string }) => Promise<void>;
  singInUser: (values: { email: string; password: string }) => Promise<void>;
  signOutUser: () => Promise<void>;
}>({
  user: {
    logged: false,
    email: null,
    uid: null,
  },
  registerUser: async () => {},
  singInUser: async () => {},
  signOutUser: async () => {},
});

export const useAuthContext = () =>
  useContext(AuthContext) as {
    user: User;
    registerUser: (values: {
      email: string;
      password: string;
    }) => Promise<void>;
    singInUser: (values: { email: string; password: string }) => Promise<void>;
    signOutUser: () => Promise<void>;
  };

const registerUser = async (values: { email: string; password: string }) => {
  try {
    const { email, password } = values;
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const singInUser = async (values: { email: string; password: string }) => {
  try {
    const { email, password } = values;
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({
    logged: false,
    email: null,
    uid: null,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          logged: true,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, registerUser, singInUser, signOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
