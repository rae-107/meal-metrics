import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Header } from "../Header/Header";
import { LoginForm } from "../LoginForm/LoginForm";
import { SignUpForm } from "../SignUpForm/SignupForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/sign-up" element={<SignUpForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
