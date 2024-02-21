import { configureStore } from "@reduxjs/toolkit";
import { dataApi } from "./dataApi";
import { setupListeners } from "@reduxjs/toolkit/query/react"


export const store = configureStore({
    reducer:{
     [dataApi.reducerPath] : dataApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(dataApi.middleware)
    }
})

setupListeners(store.dispatch)

