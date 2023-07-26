import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="home-page">
        <h2 className="welcome" >Welcome to Meal Metrics!</h2>
        <div className="splash-pitch-container">
          <h3 className="splash-pitch">
            We want to help you keep track of all your recipes, including being
            able to see how many calories are in a serving and what nutrients
            you're getting from each meal!
          </h3>
          <div className="opacity-sheet"></div>
          <img alt="Table filled with ingredients and two people cooking together" src="/assets/cooking.jpg" className="cooking-image" />
        </div>
        <h2 className="get-started" >
          Get started right now by{" "}
          <strong className="signing" onClick={() => navigate("/sign-up")}>
            signing
          </strong>{" "}
          up or{" "}
          <strong className="logging" onClick={() => navigate("/login")}>
            logging
          </strong>{" "}
          in!
        </h2>
      </section>
    </main>
  );
};
