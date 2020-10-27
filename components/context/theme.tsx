import { createContext, useState } from "react";

export const Theme = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});
export const ThemeProvider: React.FC = ({ children }) => {
  const [darkmode, setDarkmode] = useState(false);
  return (
    <Theme.Provider
      value={{
        darkMode: darkmode,
        toggleDarkMode: () =>
          setDarkmode((currentDarkmode) => !currentDarkmode),
      }}
    >
      {children}
    </Theme.Provider>
  );
};
