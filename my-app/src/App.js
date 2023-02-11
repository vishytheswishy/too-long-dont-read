import './App.css';

function App() {
  return (
    <div class = "tldr">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.2.0/react-dom.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.25/browser-polyfill.min.js"></script>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
      </head>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <b>too long;<br></br>didn't read</b>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    <a class="navbar-item">
        |
      </a>
      <a class="navbar-item is-small">
        <p class="slogan"> shortening your time <br></br>
        to read.</p>
      </a>
      
    </div>

    <div class="navbar-end is-right">
        <div class="navbar-item is-right has-dropdown is-arrowless is-hoverable is-dark">
        <a class="navbar-link is-arrowless">
          <p class>
            <div>
            <div class = "br">
            <b>...</b>
            </div>
            <div class = "br">
            <b>...</b>
            </div>
            <div class = "br">
            <b>...</b>
            </div>
            </div>
          </p>
          
        </a>

        <div class="navbar-dropdown is-dark is-right is-arrowless">
          <a class="navbar-item is-dark">
            Portfolio Portal
          </a>
          <a class="navbar-item">
            tldr it!
          </a>
          <a class="navbar-item">
            preview
          </a>
          <a class="navbar-item">
            daily market analysis
          </a>
          <a class="navbar-item">
            blogs
          </a>
          <a class="navbar-item">
            about us
          </a>
          <hr class="navbar-divider"></hr>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
      
    </div>
  </div>

</nav>
    <div className = "App-header tldr">
      <header className="containers">
        <h1 className = "tagline container is-large">
          <b>Analyze the stock market in <i> seconds.</i></b>
        </h1>
        <br></br> 
        <div class = "content container is-centered is-large">
          <b>too long; didn’t read</b> is a newsletter fully customized to your stock portfolio. 
          We analyze thousands of news articles for you and deliver them into your inbox; with full sentiment analysis and concise summaries for quick content delivery. We also offer tools to summarize anything so sign up today!
        </div>
        <br></br>
        </header>
        <div class="levels">
          <div class="field has-addons">
            <div class="control has-icons-left">
              <input type="email" class="input is-info is-rounded" placeholder="enter your email!"/>
              <span class="icon is-medium is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
        <div class="control">
            <a class="tldr button is-rounded is-info">🚀</a>
        </div>
  </div>
  </div>
  </div>
  </div>

  );
}

export default App;


