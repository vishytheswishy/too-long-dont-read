import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Registration from "./pages/Registration";
import App from "./pages/App";
import Success from "./pages/Success";
import TLDRit from "./pages/TLDRit";
import Preview from "./pages/Preview";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/success" element={<Success />} />
      {/* <Route path="/TLDRit" element={<TLDRit/>}/> */}
      <Route path="/preview" element={<Preview />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
