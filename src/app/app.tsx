import Navbar from "@/components/navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./page";

const App = () => {
  return (
    <Router>
      <div>
        {window.location.pathname !== "/" && <Navbar />}

        <Routes>
          <Route path="/" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
