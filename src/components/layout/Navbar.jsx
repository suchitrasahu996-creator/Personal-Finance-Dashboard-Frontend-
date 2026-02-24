import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (   
     <div className="bg-blue-400 px-6 py-4 flex justify-between items-center">
      <h2 className="text-white font-semibold text-lg">WELCOME TO DASHBOARD</h2>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        LOGOUT
      </button>
    </div>
  );
}
