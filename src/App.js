import "./App.css";
import Login from "./components/Login";
// import LoginPerson from "./components/LoginPerson";
import { Routes, Route } from "react-router-dom";
import LoginPerson from "./components/LoginPerson";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact />

        <Route path="/person" element={<LoginPerson />} exact />
      </Routes>
    </div>
  );
}

export default App;
