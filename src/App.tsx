import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage.tsx";
import HomePage from "pages/HomePage/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" Component={LoginPage} />
          <Route path="/Dashboard" Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
