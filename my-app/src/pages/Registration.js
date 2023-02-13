import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar.js";
import { useLocation } from "react-router-dom";
const Registration = () => {
  // Get the modal
  const location = useLocation();
  window.onload = function () {
    // your code
    console.log(location.state.email);
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    console.log(btn);
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
      modal.style.display = "block";
      console.log("this works");
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  };
  return (
    <body className="tldr">
      <Navbar />
      <div className="App-header containers">
        <div className="Registration container">
          <nav className="panel is-dark">
            <p
              panel-heading-background-color="black"
              className="panel-heading is-dark"
            >
              Create your own portfolio
            </p>
            <div className="panel-block">
              <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search" />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <label className="panel-block">
              <input type="checkbox" />
              <p font-color="white">$TSLA</p>
            </label>
            <label className="panel-block">
              <input type="checkbox" />
              $GOOGL
            </label>
            <label className="panel-block">
              <input type="checkbox" />
              $AAPL
            </label>
            <label className="panel-block">
              <input type="checkbox" />
              $META
            </label>
            <div className="column">
              <a className="is-size-7">
                Note*: Hitting submit with nothing selected will select all
                stocks
              </a>
            </div>
          </nav>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" /> I agree to the{" "}
                <button className="buttonlink is-size-6" id="myBtn">
                  Terms and Conditions
                </button>
              </label>
            </div>
          </div>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <p className="blk">
                {" "}
                <b>Terms and Conditions </b>
              </p>
              <Modal />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="control column">
                <a href="/success" className="blk button is-primary ">
                  Send your newsletter to {location.state.email} 🚀
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Registration;
