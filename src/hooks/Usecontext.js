import { createContext, useReducer } from "react"

const initialstate={theme:"light",value:[]}
const ThemeReducer=(state,action)=>{
    switch(action.type){
        case "LIGHT":
            return {...state,theme:"light"};

            case "DARK":
                return {...state,theme:"dark"};
        default :
        return state
    }
}
export const ThemeContext=createContext()
export const ThemeContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(ThemeReducer,initialstate)
    return(
<ThemeContext.Provider value={{...state,dispatch}}>
    {children}
</ThemeContext.Provider>
    )

}