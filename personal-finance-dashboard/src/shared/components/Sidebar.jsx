import {  useNavigate } from "react-router-dom";
import { IndianRupee,Target,Wallet,BarChart3,Bell, LogOut } from "lucide-react";


export default function Sidebar({ activeModule, setActiveModule }) {
  const navigate =useNavigate();
   
  const menu = [
     
    { id: "dashboard", label: "Dashboard",icon: IndianRupee},
    { id: "transactions", label: "Income & Expenses", icon: Target },
    { id: "goals", label: "Savings Goals", icon: Target },
    { id: "budget", label: "Budget Planner",icon: Wallet},
    { id: "insights", label: "Insights & Charts",icon: BarChart3 },
    { id: "bills", label: "Bill Reminders",icon: Bell},
  ];
 

  return (
    <div className=" h-screen w-65 bg-gradient-to-b from-blue-300 to-blue-500 shadow-lg p-5 flex flex-col   justify-between">
     
      <h3 className="text-xl font-bold text-indigo-600 ">
        PERSONAL FINANCE DASHBOARD
      </h3>
      <div className="h-screen">
      <nav className="flex flex-col gap-2 px-3" > 
     
        {menu.map((item) => {
          const Icon = item.icon;

          return(
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`cursor-pointer flex items-center py-3 px-4 rounded-lg transition ${
              activeModule === item.id
                ? "bg-indigo-400 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            <Icon size={20} />
            {item.label}
          </button>
          )
        })}
      </nav>
      </div>
      <div className="bottom-0" >
      <button
        onClick={() => navigate("/login")}
        className=" flex items-center gap-3 w-full px-4 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
      >
        <LogOut size={20} />
        LOGOUT
      </button>
     </div>
    </div>

  );
}
