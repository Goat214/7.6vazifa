import { useEffect, useState } from "react";

function useTheme() {
  const themeFromLocal = () => {
    return localStorage.getItem("theme") || "winter";
  };

  const [theme, setTheme] = useState(themeFromLocal);

  const changeTheme = () => {
    const newTheme = theme === "winter" ? "winter" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return changeTheme;
}

export default useTheme;
