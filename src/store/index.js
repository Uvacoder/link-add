import { configureStore } from "@reduxjs/toolkit";
import modal from "./reducers/modal";
import link from "./reducers/link";

const store = configureStore({
    reducer:{
        modal,
        link,
    }
});

export default store;