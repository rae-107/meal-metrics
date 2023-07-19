import { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = ({ currentUser, setCurrentUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  let firstName;

  if (currentUser.first_name) {
    firstName =
      currentUser?.first_name[0].toUpperCase() +
      currentUser?.first_name.slice(1);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="header">
      <h1 onClick={() => navigate("/")} className="meal-metrics">
        Meal Metrics
      </h1>

      {firstName && (
        <div className="user-dropdown">
          <div className="users-name">
            <span className="users-first-name">{firstName}'s Account</span>
            <img
              className="arrow"
              src="/assets/angle-small-down.png"
              onClick={toggleDropdown}
            />
          </div>

          {isDropdownOpen && (
            <div className="dropdown-box">
              <p className="account" onClick={() => navigate("/login")}>
                Account
              </p>
              <p>Recipes</p>
              <p>Ingredients</p>
              <p className="settings">Settings</p>
              <p
                className="log-out"
                onClick={() => {
                  setCurrentUser({});
                  localStorage.removeItem("meal_metrics_sessionId");
                }}
              >
                Log Out
              </p>
            </div>
          )}
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
