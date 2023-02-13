import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar.js";

const Registration = () => {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

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
                <button id="myBtn">terms and conditions</button>
              </label>
            </div>
          </div>
          <div id="myModal" class="modal">
            <div class="modal-content">
              <span class="close">&times;</span>
              <p class= "blk"> <b>Terms and Conditions </b></p>
              <Modal/>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="control column">
                <a href="/success" class="blk button is-primary ">
                  Submit your stock picks 🚀
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
