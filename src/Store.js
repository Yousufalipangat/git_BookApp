import React from "react";

import { createStore } from 'redux';


export function changeItemNumber(action, payload) {

    return ({
        type: action,
        payload: payload
    })
}

const initState = {
    count: 0,
    items: []
}

const deleteFromCart = (array, payload) => {

    return array.filter((items)=>items !== payload)

}

const NumberReducer = (state = initState, action) => {
    const items = state.items
    var count = state.count
    switch (action.type) {
        case 'ADD':
            if (action.payload !== undefined && !items.includes(action.payload)) {
                items.push(action.payload)
                count++
            }
            return {
                ...state,
                count: count,
                items: items
            }

        case 'REMOVE':
            return {
                ...state,
                count: state.count - 1,
                items: deleteFromCart(state.items, action.payload)
            }
        default:
            return state;

    }
}

export const store = createStore(NumberReducer);



