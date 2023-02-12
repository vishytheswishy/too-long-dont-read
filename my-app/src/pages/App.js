import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
const App = () => {
  const [email, setEmail] = useState("");

  return (
    <div class="tldr">
      <Navbar />
      <div className="App-header tldr">
        <header className="containers">
          <h1 className="tagline container is-large">
            <b>
              Analyze the stock market in <i> seconds.</i>
            </b>
          </h1>
          <br></br>
          <div class="content container is-centered is-large">
            <b>too long; didn’t read</b> is a newsletter fully customized to
            your stock portfolio. We analyze thousands of news articles for you
            and deliver them into your inbox; with full sentiment analysis and
            concise summaries for quick content delivery. We also offer tools to
            summarize anything.
          </div>
          <br></br>
        </header>
        <div class="levels">
          <div class="field has-addons">
            <div class="control has-icons-left">
              <input
                type="email"
                class="is-transparent input  is-rounded"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
              />
              <span class="icon is-medium is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
            <div class="control">
              <a href= "/registration" class="blk button is-rounded ">try it!🚀</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
