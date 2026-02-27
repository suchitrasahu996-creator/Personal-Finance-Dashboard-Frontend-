import { User } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../../features/auth/context/AuthContext";


export default function Navbar() {
  const { user } = useContext(AuthContext);
  console.log("USER", user);
  const userInfo = localStorage.getItem("userInfo")
  return (   
     <div className="bg-blue-400 px-6 py-4 flex justify-between items-center">
      <h2 className="text-white font-semibold text-lg">WELCOME {JSON.parse(userInfo)?.name}</h2>
    <div>
      
      <User className="text-gray-500" size={48} /></div>
      
    </div>
  );
}
