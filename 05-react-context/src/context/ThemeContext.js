import { createContext, useState } from "react";

const ThemeContext = createContext();

const initialTheme = 'light';
const PrincipalInitialTheme = 'my-page';

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);
    const [principalTheme, setPrincipalTheme] = useState(PrincipalInitialTheme);

    const handleTheme = (e) => {
  
        if(e.target.value === 'light'){
          setTheme('light');
          setPrincipalTheme(PrincipalInitialTheme);
      
        }else{
          setTheme('dark');
          setPrincipalTheme('my-page dark2');
        }
      };

    const data = {theme, handleTheme};

    return(
          <ThemeContext.Provider value={data}>
              {children}
          </ThemeContext.Provider>
          )

};

export {ThemeProvider};
export default ThemeContext;