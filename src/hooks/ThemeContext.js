
import { useContext } from 'react';
import { ThemeContext } from './Usecontext';


export const useThemeContext = () => {

const themeContext =useContext(ThemeContext)


   if(themeContext ===undefined){
    throw new Error("context value is undefined")
   }
   return themeContext 
}