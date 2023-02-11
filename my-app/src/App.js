import logo from './logo.svg';
import './App.css';


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function App() {
  return (
    
    <div className="App">
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.0/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.2.0/react-dom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.25/browser-polyfill.min.js"></script>
    </head>
      <header className="App-header">
        <h1>
        Analyze the stock market in seconds 🚀.
        </h1>
          <p className = "Paragraph">
        too long; didn’t read is a newsletter fully customized to your stock portfolio. 
        We will ingest and analyze thousands of news articles for you and deliver them into your inbox; with full sentiment analysis and concise summaries for quick content delivery. We also offer tools* to summarize anything!
        </p>
        <input  type="email" placeholder="email"></input>
        
      </header>
    </div>
  );
}

export default App;
