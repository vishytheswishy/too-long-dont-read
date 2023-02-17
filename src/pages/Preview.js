import "./App.css";
import Navbar from "./components/Navbar.js";
import EmailTemplate from "./components/newsletter.png";

const Success = () => {
  return (
    <div class="tldr">
      <Navbar />
      <div class="App-header ">
        <div class="Registration ">
          <div className="level">
            <div className="level-item">
              <img
                src={require("./components/newsletter.png")}
                width="800"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
