import { useContext, useEffect, useState } from "react";
import InputNormal from "./inputs/InputNormal";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Authentication from "../auth";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useContext(Authentication);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/users?email=${email}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (Object.keys(data).length === 0) {
          toast.error("Please Enter valid user");
        } else {
          if (data[0].password === password) {
            setIsAuth(true);
            navigate("/dashboard");
          } else {
            toast.error("Please Enter valid user");
          }
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      action="#"
      method="POST"
    >
      <InputNormal
        type="email"
        name="email"
        label="Email Address"
        value={email}
        handleChange={setEmail}
      />

      <InputNormal
        type="password"
        name="password"
        label="Password"
        value={password}
        handleChange={setPassword}
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Sign in
        </button>
      </div>
      <div>
        <Link
          to="/register"
          className="flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-indigo-600"
        >
          Create a new account?
        </Link>
      </div>
    </form>
  );
}
