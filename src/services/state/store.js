import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    showAuthForm: false,
    cart: {},
    toastMessage: null,
    errorMessage: null,
};

export const setShowCart = createAction('setShowCart');
export const setShowAuthForm = createAction('setShowAuthForm');
export const setCart = createAction('setCart');
export const setToastMessage = createAction('setToastMessage');
export const setErrorMessage = createAction('setErrorMessage');

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
        .addCase(setToastMessage, (state, action) => {
            state.toastMessage = action.payload;
        })
        .addCase(setErrorMessage, (state, action) => {
            state.errorMessage = action.payload;
        })
});

export const store = configureStore({
    reducer
});
