import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();


const initialState = {
    items: [],
    totallVariants: 0,
    totallItems: 0,
    totallPrice: 0,
    checkedOut: false,
}

const sumItems = (items) => {
    const totallVariants = items.length;
    const totallItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totallPrice = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

    return { totallVariants, totallItems, totallPrice };
}

const reducer = (state, action) => {

    // If payload is not provided
    let itemIndex;
    if (action.payload !== undefined) {
        itemIndex = state.items.findIndex(item => item.id === action.payload.id);
    }
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "ADD_TO_CART":
            // If the item doesn't exist in our cart we add one
            if (itemIndex === -1) {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                ...sumItems(state.items),
            };


        case "REMOVE_FROM_CART":
            // If the item is in the cart we try to remove it etirelly.
            const newItems = state.items.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                items: [...newItems],
                ...sumItems(newItems),
            };

        case "INCREASE_ITEM":
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            }
            return {
                ...state,
                ...sumItems(state.items),
            };

        case "DECREASE_ITEM":
            if (itemIndex >= 0) {

                state.items[itemIndex].quantity--;
            }
            return {
                ...state,
                ...sumItems(state.items),
            };

        case "CLEAR":
            if (state.items.length) {
                return {
                    items: [],
                    totallItems: 0,
                    totallVariants: 0,
                    totallPrice: 0,
                    checkedOut: false,
                }
            }
            return {
                ...state,
            }

        case "CHECKOUT":
            if (state.items.length) {
                return {
                    items: [],
                    totallItems: 0,
                    totallVariants: 0,
                    totallPrice: 0,
                    checkedOut: true,
                }
            }
            return {
                ...state,
            }
    }
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;