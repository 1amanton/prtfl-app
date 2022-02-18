import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state, action) => {
    switch(action.type) {
        case "TOGGLE":
            return { darkMode: !state.darkMode };
        default:
            return state;
    };
};


/**
 * components that covered in ThemeProvider in App.js will be his childs and will have dark/light mode toggler
 * also if cover App component in index.js and it will be for all app
 * @param {*} props 
 * @returns 
 */
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
};