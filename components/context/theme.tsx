import { createContext, useState } from "react";
import { getHours } from "date-fns";
const isNightNow = () => {
  const now = new Date();
  const hour = getHours(now);
  return hour < 6 || 18 < hour;
};

export const Theme = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});
export const ThemeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkmode] = useState(isNightNow());
  return (
    <Theme.Provider
      value={{
        darkMode,
        toggleDarkMode: () =>
          setDarkmode((currentDarkmode) => !currentDarkmode),
      }}
    >
      {children}
    </Theme.Provider>
  );
};
