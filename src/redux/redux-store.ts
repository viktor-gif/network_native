import { applyMiddleware, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesTypes<T> = T extends{[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends{[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

//@ts-ignore
window.store = store

export default store