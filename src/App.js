import "./App.css";
// import LoginPerson from "./components/LoginPerson";
import { Routes, Route } from "react-router-dom";
import LoginPerson from "./components/LoginPerson";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/person"
          element={
            <PrivateRoute>
              <LoginPerson />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
