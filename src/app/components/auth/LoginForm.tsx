"use client";
import { useState } from "react";
import { useAuthContext } from "@/app/context/AuthContext";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { registerUser, singInUser } = useAuthContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await singInUser(values);
  };

  const handleRegister = async () => {
    await registerUser(values);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <label className="block mb-2">
          Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Password
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            className="block w-full px-4 py-2 border rounded"
          />
        </label>
        <div className="flex justify-between">
          <button
            type="submit"
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
            }
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleRegister}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
            disabled={true}
          >
            Register
          </button>
          {/* <Link
            href="/forgot-password"
            className="text-sm text-blue-500 hover:text-blue-700"
          >
            Forgot password?
          </Link> */}
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
