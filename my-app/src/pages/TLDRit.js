import "./App.css";
import Navbar from "./components/Navbar.js";

const TLDRit = () => {
    return (
    <div class="tldr containers">
      <Navbar />
      <div class="App-header">
        <div class="Registration container">
          <header className="containers">
            <h1 className="tagline container is-large">
              <b>
                Welcome to <i>TLDRit!</i>
              </b>
            </h1>
            <div class="content container is-centered is-normal">
              <b>We understand that reading things can be time consuming.</b> <br></br>
              Paste or upload anything, from articles to entire books. And we
              will reduce, summarize, and read your text for you!
            </div>
            <textarea
              class="textarea"
              placeholder="e.g. Hello world"
            ></textarea>
            <br></br>
          </header>
          <div class="columns">
            <div class="file has-name is-boxed is-normal">
              <label class="file-label">
                <input class="file-input" type="file" name="resume" />
                <span class="file-cta">
                  <span class="file-icon">
                    <i class="fas fa-upload"></i>
                  </span>
                  <span class="file-label">Choose a file…</span>
                </span>
                <span class="file-name">example.txt</span>
              </label>
            </div>
            <div class="columns">
              <div class="column">
                <div class="control column">
                  <div class="levels">
                    <div class="level">
                      <a class="blk button is-danger is-small">
                        Try it with War & Peace!
                      </a>
                    </div>
                    <div class="level">
                      <a class="blk button is-danger is-small ">
                        Try it with Shakespeare!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button id="myBtn" class="button is-primary is-large">
              Summarize your text!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TLDRit;
