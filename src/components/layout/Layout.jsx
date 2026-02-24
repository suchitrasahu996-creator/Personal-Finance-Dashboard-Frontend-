import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Layout({ children }) {
  const [activeModule, setActiveModule] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeModule={activeModule} setActiveModule={setActiveModule} />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">{children(activeModule)}</div>
      </div>
    </div>
  );
}