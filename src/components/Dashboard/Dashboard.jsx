import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/auth/user", { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  const logout = () => {
    axios.get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then(() => window.location.href = "/");
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {user ? (
        <>
          <h1 className="text-2xl">Welcome, {user.displayName}</h1>
          <img src={user.photos[0].value} alt="Profile" className="rounded-full mt-4 w-24 h-24" />
          <button onClick={logout} className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg">
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
