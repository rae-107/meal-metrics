import { useState } from "react";
import "./SignUpForm.css";
import { Header } from "../Header/Header";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  // consider making state here for currently logged in user

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
      clearInputs();
      console.log(data);
      return data;
    } catch {
      console.log('sign up form broke :/')
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
      <Header />
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
          <button onClick={(e) => createUser(e)}>Submit</button>
        </form>
      </section>
    </>
  );
};
