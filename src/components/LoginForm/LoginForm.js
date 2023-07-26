import { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

export const LoginForm = ({ setSessionId, setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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
      setCurrentUser(data[0]);
      setSessionId(data[1]);
      localStorage.setItem("meal_metrics_sessionId", data[1]);
      setUsername("");
      setPassword("");
      return data;
    } catch (error) {
      console.log("login form broke :/", error);
    }
  };

  return (
    <>
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
          <button
            className="login-button"
            onClick={(e) => {
              authenticateUser(e);
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
