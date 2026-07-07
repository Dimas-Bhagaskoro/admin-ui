import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // Tetap pertahankan tema warna aksen bawaanmu
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });
  
  // SOAL 6: Tambahkan state mode (light/dark)
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// PENTING: Kembalikan default export agar file lain di proyekmu tidak error!
export default ThemeContext;