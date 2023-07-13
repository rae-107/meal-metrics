import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = ({ currentUser }) => {
  const navigate = useNavigate();
  let firstName;
  if (currentUser) {
    firstName = currentUser?.first_name[0].toUpperCase() + currentUser.first_name.slice(1);
  }
  return (
    <section className="header">
      <h1 onClick={() => navigate("/")} className="meal-metrics">
        Meal Metrics
      </h1>
      {firstName && (
        <div className="user-dropdown">
          <span className="first_name">{firstName}'s Account</span>
        </div>
      )}
      {!firstName && (
        <div className="account-container">
          <button onClick={() => navigate("/login")}>Log In</button>
          <button onClick={() => navigate("/sign-up")}>Sign Up</button>
        </div>
      )}
    </section>
  );
};
