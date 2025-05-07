import { useState } from "react";
import Main from "./MainContent";
import Nav from "./Nav";



function Total() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return (
    <>
      <Nav onToggleSidebar={toggleSidebar} onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main isOpen={isSidebarOpen} darkMode={darkMode} />
    </>
  )
}

export default Total;