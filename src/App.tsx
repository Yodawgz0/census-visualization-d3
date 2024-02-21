import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "pages/LoginPage/LoginPage.tsx";
import HomePage from "pages/HomePage/HomePage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Dashboard" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
