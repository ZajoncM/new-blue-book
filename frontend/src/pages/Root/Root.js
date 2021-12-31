import AppProvider from "../../providers/AppProvider";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Register from "../Register/Register";
function Root() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppProvider>
  );
}

export default Root;
