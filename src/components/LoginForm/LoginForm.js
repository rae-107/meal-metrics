import { useState } from "react";
import "./LoginForm.css";
import { Header } from "../Header/Header";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // consider making state here for currently logged in user

  const authenticateUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/user/login`, {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data)
      setUsername("");
      setPassword("");
    } catch {
      console.log('login form broke :/')
    }
  };

  return (
    <>
      <Header />
      <section className="login-page">
        <form className="login-form">
          <h1 className="login-here">Login Here</h1>
          <label className="login-label">
            Username:
            <input
              className="login-inputs"
              type="text"
              value={username}
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </label>
          <label className="login-label">
            Password:
            <input
              className="login-inputs"
              type="text"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>
          <button className="login-button" onClick={(e) => authenticateUser(e)}>
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
