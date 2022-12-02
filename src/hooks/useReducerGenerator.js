import React, { useReducer } from 'react'

export const useReducerGenerator = (initialState) => {

    // const initialState = {
    //     item: {},
    //     renderInCart: false,
    //     imageFullSize: {
    //         active: false,
    //         url: "",
    //     },
    // };

    function State(state, action) {
        switch (action.type) {
            case action.type:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(State, initialState);

    const setState = (data) => {
        dispatch({ type: Object.keys(data)[0], payload: data });
    };
    return { state, setState }
}
