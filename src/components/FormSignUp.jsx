import { useState } from "react";
import InputNormal from "./inputs/InputNormal";
import InputSelect from "./inputs/InputSelect";
import InputRadio from "./inputs/InputRadio";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function FormSignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("laayoune");
  const [gender, setGender] = useState("male");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const infoUser = { username, email, password, city, gender };

    fetch("https://api-dashboard-app.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(infoUser),
    })
      .then(() => {
        toast.success("Registered successfully.");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Error: " + err.message);
      });
  };

  const options = ["Laayoune", "Rabat", "Agadir"];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <InputNormal
        type="text"
        name="username"
        label="User Name"
        value={username}
        handleChange={setUsername}
      />
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
      <InputSelect
        value={city}
        handleChange={setCity}
        name="city"
        options={options}
      />
      <InputRadio value={gender} handleChange={setGender} />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-sky-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
        >
          Register
        </button>
      </div>
      <div>
        <Link
          to="/"
          className="flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-gray-600"
        >
          Back
        </Link>
      </div>
    </form>
  );
}
