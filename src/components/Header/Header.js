import { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export const Header = ({ currentUser }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navigate = useNavigate();

  let firstName;

  if (currentUser.first_name) {
    firstName = currentUser?.first_name[0].toUpperCase() + currentUser?.first_name.slice(1);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <section className="header">

      <h1 onClick={() => navigate("/")} className="meal-metrics">
        Meal Metrics
      </h1>

      {firstName && (
        // This is the dropdown container with button
        <div className="user-dropdown">

          <div className="users-name">

            <span className="users-first-name">{firstName}'s Account</span>
            <img className="arrow" src="/assets/angle-small-down.png" onClick={toggleDropdown} />
          </div>

          {isDropdownOpen && 
          // This is the content of the dropdown 
            <div className="dropdown-box" >
              <p className="account" onClick={() => navigate("/login")} >Account</p>
              <p>Recipes</p>
              <p>Ingredients</p>
              <p className="settings" >Settings</p>
              <p className="log-out">Log Out</p>
            </div>}
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
