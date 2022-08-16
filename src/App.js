import "./App.css";
import Login from "./components/Login";
// import LoginPerson from "./components/LoginPerson";
import { Routes, Route } from "react-router-dom";
import LoginPerson from "./components/LoginPerson";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/person" element={<LoginPerson />} exact />
        </Route> */}
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
