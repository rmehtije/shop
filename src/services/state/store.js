import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    showAuthForm: false,
    cart: {},
};

export const setShowCart = createAction('setShowCart');
export const setShowAuthForm = createAction('setShowAuthForm');
export const setCart = createAction('setCart');

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(setShowCart, (state, action) => {
            state.showCart = action.payload;
        })
        .addCase(setShowAuthForm, (state, action) => {
            state.showAuthForm = action.payload;
        })
        .addCase(setCart, (state, action) => {
            state.cart = action.payload;
        })
});

export const store = configureStore({
    reducer
});
