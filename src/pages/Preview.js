import "./App.css";
import Navbar from "./components/Navbar.js";
import EmailTemplate from "./components/newsletter.png";

const Success = () => {
  return (
    <div class="tldr">
      <Navbar />
      <div class="App-header containers">
        <div class="Registration container">
          <header className="containers">
            <div className="container">
              <p className="is-centered is-one-fifth">Newsletter Preview:</p>
              <img
                src={require("./components/newsletter.png")}
                width="450"
                height="400"
              />
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Success;
