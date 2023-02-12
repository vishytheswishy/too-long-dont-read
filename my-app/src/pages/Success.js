import "./App.css";
import Navbar from "./components/Navbar.js";

const Success = () => {
  return (
    <div class="tldr">
      <Navbar />
      <div class="App-header containers">
        <div class="Registration container">
        <header className="containers">
          <h1 className="tagline container is-large">
            <b>
              Congrats!
            </b>
          </h1>
          <br></br>
          <div class="content container is-centered is-large">
            You will now be receiving a confirmation email with  a  password for future logins/updates.  We look forward to shortening your TTR (time to read)! 
          </div>
          <br></br>
        </header>
        </div>
      </div>
    </div>
  );
};

export default Success;
