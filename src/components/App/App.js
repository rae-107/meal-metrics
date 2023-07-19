import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { LoginForm } from "../LoginForm/LoginForm";
import { SignUpForm } from "../SignUpForm/SignupForm";
import { Header } from "../Header/Header";
import { useState, useEffect } from "react";

function App() {
  const [sessionId, setSessionId] = useState("");
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetchData().then((data) => setCurrentUser(data));
  }, []);

  const fetchData = async () => {
    const localStorageSessionId = localStorage.getItem("meal_metrics_sessionId");
    console.log("app line 19", localStorageSessionId);
    if (localStorageSessionId) {
      setSessionId(localStorageSessionId);
      const res = await fetch(`http://localhost:8080/user/${localStorageSessionId}`);
      const data = await res.json();
      setCurrentUser(data)
      console.log("app line 25", data);
      return data;
    }
  };

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={
            <LoginForm
              sessionId={sessionId}
              setSessionId={setSessionId}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <SignUpForm
              sessionId={sessionId}
              setSessionId={setSessionId}
              setCurrentUser={setCurrentUser}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
