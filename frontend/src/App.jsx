import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");

  if (!user && page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (!user) {
    return <Login setUser={setUser} setPage={setPage} />;
  }

  return <Dashboard user={user} setUser={setUser} />;
}

export default App;