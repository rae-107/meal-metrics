import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="header">
      <h1 onClick={navigate("/")} className="meal-metrics">
        Meal Metrics
      </h1>
      <div className="account-container">
        <button onClick={navigate("/login")}>Log In</button>
        <button onClick={navigate("/sign-up")}>Sign Up</button>
      </div>
    </section>
  );
};
