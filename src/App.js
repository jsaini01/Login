import "./App.css";
import Login from "./components/Login";
import LoginPerson from "./components/LoginPerson";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/person" element={<LoginPerson />} />
      </Routes>
    </div>
  );
}

export default App;
