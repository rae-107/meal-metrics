import { useState } from "react";
import "./LoginForm.css";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUser = async (e) => {
    e.preventDefault()
    console.log(username)
    const res = await fetch(`http://localhost:8080/user/${username}`)
    const data = await res.json()
    if (data.password === password) {
      console.log(data)
    }
    setUsername('')
    setPassword('')
  }

  return (
    <section className="login-page">
      <form className="login-form">
        <h1 className="login-here" >Login Here</h1>
        <label className="login-label" >
          Username:  
          <input
            className="login-inputs"
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label className="login-label" >
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
        <button className="login-button" onClick={(e) =>getUser(e)}>Submit</button>
      </form>
    </section>
  );
};
