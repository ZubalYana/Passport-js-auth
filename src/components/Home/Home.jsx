import axios from "axios";

const Home = () => {
  const loginWithGoogle = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button onClick={loginWithGoogle} className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Login with Google
      </button>
    </div>
  );
};

export default Home;
