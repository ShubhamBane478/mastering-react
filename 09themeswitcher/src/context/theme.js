import { createContext,useContext } from "react";

export const ThemeContext = createContext({  //We can pass the variables and methods has the default value
    themeMode : "light",  //Default value can be pass
    darkTheme : () => {},
    lightTheme : () => {},
})
export const ThemeProvider  = ThemeContext.Provider  //Other way to  provider context

//Custom Hook Created 
export default function useTheme(){ 
    return useContext(ThemeContext)
}


