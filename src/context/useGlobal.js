import { createContext, useContext, useReducer } from "react";
import { PoPupDetails } from "../pages/PoPupDetails";

export const GlobalContext = createContext();

export const useGlobal = () => {

    const initialState = {
        modalDetails: {
            active: false,
            item: {},
        },
        poPupDetails: {
            active: false,
            item: {},
        }
    };

    function Global(state, action) {
        switch (action.type) {
            case action.type:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    }

    const [global, dispatch] = useReducer(Global, initialState);

    const setGlobal = (data) => {
        dispatch({ type: Object.keys(data)[0], payload: data })
    }

    return ({ global, setGlobal })
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    return context;
};