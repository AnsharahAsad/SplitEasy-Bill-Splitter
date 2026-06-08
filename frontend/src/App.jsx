import { useEffect, useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const currentUser = await getCurrentUser();

        setUser({
          email: currentUser.signInDetails?.loginId || "User"
        });
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user && page === "signup") {
    return <Signup setPage={setPage} />;
  }

  if (!user) {
    return <Login setUser={setUser} setPage={setPage} />;
  }

  return <Dashboard user={user} setUser={setUser} />;
}

export default App;