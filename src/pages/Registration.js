import "./App.css";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar.js";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

var listOfStocks = [
  { name: "$ TSLA", index: 0 },
  { name: "$ GOOGL", index: 1 },
  { name: " $ AMZN", index: 2 },
  { name: "$ S&P500", index: 3 },
  { name: "$ NFLX", index: 4 },
  { name: "$ AAPL", index: 5 },
  { name: "$ NVDA", index: 6 },
  { name: "$ AMD", index: 7 },
  { name: "$ META", index: 8 },
];

const Registration = () => {
  const navigate = useNavigate();
  function ClickEvent() {
    navigate("/success", {});
  }
  let payload = [];
  // logic for adding and removing stocks in the frontend
  const [checkedState, setCheckedState] = useState(
    new Array(listOfStocks.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  // logic for adding and removing stocks in the frontend
  // for disabling the submit button

  const [state, setState] = useState(true);
  const location = useLocation();

  function termsAreEnabled() {
    setState(false);
    document.getElementById("termsAndConditions").disabled = true;
  }

  function sendNewsletter() {
    console.log(checkedState);

    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i]) {
        payload.push(listOfStocks[i]["name"]);
      }
    }
    // make API call here
    const data = {
      email: location.state.email,
      stocks: payload
    };
    axios.post('https://gw2lhvhtg4.execute-api.us-east-1.amazonaws.com/dev', data)
      .then(response => {
        console.log(response.data);
        // Do something with the response
      })
      .catch(error => {
        console.log(error);
        // Handle error
      });
    payload = [];
    // navigate to success page or call error message
    ClickEvent();
  }

  // function search() {
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById("myInput");
  //   filter = input.value.toUpperCase();
  //   li = document.getElementsByTagName("li");
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // }
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
            {/* <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  id= "myInput"
                  className="input"
                  type="text"
                  placeholder="Search"
                  // onkeyup={search()}
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div> */}
            <ul className="toppings-list">
              {listOfStocks.map(({ name }, index) => {
                return (
                  <li key={index}>
                    <label
                      className="panel-block"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      {name}
                    </label>
                  </li>
                );
              })}
            </ul>
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
                <input
                  id="termsAndConditions"
                  onClick={termsAreEnabled}
                  type="checkbox"
                />{" "}
                I agree to the{" "}
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
                <button
                  id="myBtn"
                  disabled={state}
                  onClick={sendNewsletter}
                  className="blk button is-primary "
                >
                  Send your newsletter to {location.state.email} 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Registration;
