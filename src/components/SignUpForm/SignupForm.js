import { useState } from "react";
import "./SignUpForm.css";
import { useNavigate } from "react-router-dom";

export const SignUpForm = ({ setSessionId, setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");

  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/user", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
          firstName,
          lastName,
          birthday,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      localStorage.setItem("meal_metrics_sessionId", data[1]);
      setCurrentUser(data[0]);
      setSessionId(data[1]);
      clearInputs();
      return data;
    } catch (error) {
      console.log("sign up form broke :/", error);
    }
  };

  const clearInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setBirthday("");
  };

  return (
    <>
      <section className="sign-up-page">
        <form className="sign-up-form">
          <h1 className="sign-up-here">Sign Up Here</h1>
          <label className="sign-up-labels">
            Username:
            <input
              className="sign-up-inputs"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label className="sign-up-labels">
            Email:
            <input
              className="sign-up-inputs"
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </label>
          <label className="sign-up-labels">
            Password:
            <input
              className="sign-up-inputs"
              type="text"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <label className="sign-up-labels">
            First Name:
            <input
              className="sign-up-inputs"
              type="text"
              value={firstName}
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </label>
          <label className="sign-up-labels">
            Last Name:
            <input
              className="sign-up-inputs"
              type="text"
              value={lastName}
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </label>
          <label className="sign-up-labels">
            Birthday:
            <input
              className="sign-up-inputs"
              type="date"
              value={birthday}
              name="birthday"
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="Birthday"
            />
          </label>
          <button
            onClick={(e) => {
              createUser(e);
              navigate("/");
            }}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
