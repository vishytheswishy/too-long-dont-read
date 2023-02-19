import "./App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import validator from "validator";

const App = () => {
  // To get the scroll position of current webpage

  const navigate = useNavigate();

  const [emailError, setEmailError] = useState("");
  function ClickEvent() {
    navigate("/registration", {
      state: {
        email: document.getElementById("emailInput").value,
      },
    });
  }

  window.onload = function () {
    document.body.style.overflow = "hidden";
    document.body.classList.add("no-scroll");
    function stateHandle() {
      console.log(
        validator.isEmail(document.getElementById("emailInput").value)
      );
      if (validator.isEmail(document.getElementById("emailInput").value)) {
        button.disabled = false;
      } else {
        setEmailError("invalid email!");
        button.disabled = true;
      }
      console.log();
    }
    let input = document.getElementById("emailInput");
    let button = document.getElementById("submitButton");
    button.disabled = true;
    input.addEventListener("change", stateHandle);
  };
  return (
    <div class="tldr">
      <Navbar />
      <div className="App-header tldr">
        <header className="containers">
          <h1 className="tagline container is-large">
            <b>
              Analyze the stock market in <i>seconds</i>
              <i className="blink">_</i>
            </b>
          </h1>
          <br></br>
          <div class="content container is-centered is-large">
            <b>too long; didn’t read</b> is a newsletter fully customized to
            your stock portfolio. We analyze thousands of news articles for you
            and deliver them into your inbox with full sentiment analysis and
            concise summaries.
          </div>
          <br></br>
        </header>
        <div class="levels">
          <div class="field has-addons">
            <div class="control has-icons-left">
              <input
                id="emailInput"
                type="email"
                class="is-transparent input is-rounded"
                placeholder="enter your email"
              />
              <span class="icon is-medium is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <div class="control">
              <button
                id="submitButton"
                onClick={ClickEvent}
                class="is-primary button is-rounded "
              >
                try it!🚀
              </button>
              <div className="container">
                <span
                  className="level"
                  style={{
                    color: "red",
                  }}
                >
                  {emailError}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
