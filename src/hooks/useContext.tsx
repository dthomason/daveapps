import { useState, createContext, useContext, FC } from "react";


interface Context {
  theme: 'dark' | 'light';
  toggleThemeMode: () => void;
}

const userSettings: Context = {
  theme: 'dark',
  toggleThemeMode: () => {},
}

const UserContext = createContext<Context>(userSettings);

export const UserContextProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(userSettings.theme);

  const toggleThemeMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");

  }

  const value = {
    theme,
    toggleThemeMode,
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}


export const useUserContext = (): Context => useContext(UserContext)


