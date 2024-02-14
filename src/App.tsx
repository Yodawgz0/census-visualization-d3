import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage.tsx";
import HomePage from "pages/HomePage/HomePage";

function App() {
  const authToken = document.cookie.includes("authToken");

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route
            path="/Dashboard"
            element={authToken ? <HomePage /> : <Navigate to="/Login" />}
          />
          <Route
            path="/"
            element={
              authToken ? (
                <Navigate to="/Dashboard" />
              ) : (
                <Navigate to="/Login" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
