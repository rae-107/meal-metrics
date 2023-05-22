import { useState } from "react";
import "./SignUpForm.css";

export const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("")
  const [birthday, setBirthday] = useState("")

  const createUser = async (e) => {
    e.preventDefault()
    const res = await fetch(`http://localhost:8080/user`, {
      method: "POST",
      body: JSON.stringify({
        username, email, password, first_name: firstName, last_name: lastName, birth_day: birthday
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    console.log('res', res)
    console.log('data', data)
  }

  return (
    <section className="sign-up-page">
      <form className="sign-up-form">
        <h1 className="sign-up-here" >Login Here</h1>
        <label>
          Username:  
          <input
            type="text"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </label>
        <label>
          Email:  
          <input
            type="text"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label>
          Password: 
          <input
            type="text"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>
        <label>
          First Name: 
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
        </label>
        <label>
          Last Name: 
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
        </label>
        <label>
          Birthday: 
          <input
            type="date"
            value={birthday}
            name="birthday"
            onChange={(e) => setBirthday(e.target.value)}
            placeholder="Birthday"
          />
        </label>
        <button onClick={(e) =>createUser(e)}>Submit</button>
      </form>
    </section>
  );
};
