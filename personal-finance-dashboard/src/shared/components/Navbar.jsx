
import { User } from "lucide-react";


export default function Navbar() {
  

  return (   
     <div className="bg-blue-400 px-6 py-4 flex justify-between items-center">
      <h2 className="text-white font-semibold text-lg">WELCOME TO DASHBOARD</h2>
    
       
        <button variant="outline" size="icon" className="rounded-full">
          <User className="h-4 w-20 rounded-full border-2 border-r-red-950 justify-center" />
        </button>

    </div>
  );
}
