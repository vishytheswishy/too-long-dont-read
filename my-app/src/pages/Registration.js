import "./App.css";
import Navbar from "./components/Navbar.js";

const Registration = () => {
  return (
    <div class="tldr">
      <Navbar />
      <div class="App-header containers">
        <div class="Registration container">
          <nav class="panel is-dark">
            <p
              panel-heading-background-color="black"
              class="panel-heading is-dark"
            >
              Create your own portfolio
            </p>
            <div class="panel-block">
              <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search" />
                <span class="icon is-left">
                  <i class="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <label class="panel-block">
              <input type="checkbox" />
              <p font-color="white">$TSLA</p>
            </label>
            <label class="panel-block">
              <input type="checkbox" />
              $GOOGL
            </label>
            <label class="panel-block">
              <input type="checkbox" />
              $AAPL
            </label>
            <label class="panel-block">
              <input type="checkbox" />
              $META
            </label>
            <div class="column">
              <a>
                Note*: Hitting submit with nothing <br></br>selected will select
                all stocks
              </a>
            </div>
          </nav>
          <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" /> I agree to the{" "}
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
          <div class="columns">
            <div class="column">
              <div class="control column">
                <a class="blk button is-primary ">Submit your stock picks 🚀</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
