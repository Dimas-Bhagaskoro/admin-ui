import React, { useContext, useState } from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { logoutService } from "../../services/authService";
import { Backdrop, CircularProgress } from '@mui/material';

function MainLayout({ children }) {
  const [openLoader, setOpenLoader] = useState(false);

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];

  const { theme, setTheme, mode, toggleMode } = useContext(ThemeContext);

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balances" },
    { id: 3, name: "Transaction", icon: <Icon.Transaction />, link: "/transaction" },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expenses" }, 
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    setOpenLoader(true);
    try {
      await logoutService();
      setTimeout(() => {
        setOpenLoader(false);
        logout();
      }, 1500);
    } catch (err) {
      console.error(err);
      setOpenLoader(false);
      if (err.status === 401) {
        logout();
      }
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 9999 }}
        open={openLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* SOAL 6: Ditambahkan class dynamic 'dark' di elemen induk */}
      <div className={`flex min-h-screen ${theme?.name || "theme-green"} ${mode === 'dark' ? 'dark bg-slate-950 text-white' : 'bg-special-mainBg'}`}>
        <aside 
          className="bg-defaultBlack w-28 sm:w-64 text-special-bg2
          flex flex-col justify-between px-7 py-12 border-r dark:border-slate-900"
        >
          <div>
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>
            <nav className="flex flex-col gap-1">
              {menu.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.link}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 transition-all ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs text-gray-400 mb-2 font-semibold">Themes</div>
            <div className="flex flex-wrap gap-2 items-center mb-6">
              {themes.map((t) => (
                <div
                  key={t.name}
                  className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer hover:scale-110 transition-transform ${
                    theme?.name === t.name ? "ring-2 ring-white" : ""
                  }`}
                  onClick={() => setTheme(t)}
                ></div>
              ))}
            </div>

            <div onClick={handleLogout} className="cursor-pointer"> 
              <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md hover:bg-opacity-80 transition-all">
                <div className="mx-auto sm:mx-0 text-primary">
                  <Icon.Logout />
                </div>   
                <div className="ms-3 hidden sm:block">Logout</div>
              </div>
            </div>

            <div className="border my-6 border-b-special-bg"></div>
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                {user?.name?.charAt(0).toUpperCase() || "A"}
              </div>
              <div className="hidden sm:block text-xs">
                <span className="font-bold text-white block">{user?.name}</span>
                <span className="text-gray-400 cursor-pointer hover:underline">View Profile</span>
              </div>
              <div className="hidden sm:block text-gray-400">
                <Icon.Setting />
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0">
          {/* SOAL 6: Peletakan tombol di kustomisasi area header navbar */}
          <header className="border-b border-gray-200 bg-white px-6 py-5 flex justify-between items-center transition-colors duration-200 dark:bg-slate-900 dark:border-slate-800">
            <div className="flex items-center gap-4">
              <div>
                <div className="font-bold text-2xl text-gray-800 dark:text-white">{user?.name}</div> 
                <div className="text-gray-400 hidden sm:block text-sm">May 19, 2023</div> 
              </div>
              
              <button 
                onClick={toggleMode}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 bg-gray-50 hover:bg-gray-100 border-gray-300 text-gray-700 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-200 dark:hover:bg-slate-700"
              >
                {mode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
            
            <div className="flex items-center gap-6">
              <div>
                <NotificationsIcon className="text-gray-400 hover:text-primary cursor-pointer scale-110"/>
              </div> 
              <Input backgroundColor={mode === 'dark' ? 'bg-slate-800' : 'bg-gray-50'} border={mode === 'dark' ? 'border-slate-700' : 'border-gray-200'} />
            </div>
          </header>
          
          <main className="flex-1 px-6 py-6 overflow-y-auto transition-colors duration-200 dark:bg-slate-950">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export default MainLayout;