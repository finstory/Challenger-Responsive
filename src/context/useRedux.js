import { createContext, useContext, useReducer } from "react";

export const ReduxContext = createContext();

export const useRedux = () => {

    const initialState = {
        modalDetails: {
            active: false,
            item: {},
        },
        listViews: [],
        activeTextArea: false
    };

    function Redux(state, action) {
        switch (action.type) {
            case action.type:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    }

    const [redux, dispatch] = useReducer(Redux, initialState);

    const setRedux = (data) => {
        dispatch({ type: Object.keys(data)[0], payload: data })
    }

    return ({ redux, setRedux })
}

export const useReduxContext = () => {
    const context = useContext(ReduxContext);
    return context;
};