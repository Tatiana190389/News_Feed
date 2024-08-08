import { configureStore } from '@reduxjs/toolkit';
import newsFilterSliceReducer from '../Slices/newsFilterSlice';

const myLoggerMiddleware = (storeAPI) => (next) => (action) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', storeAPI.getState());
    return result;
};

const store = configureStore({
    reducer: {
        newsFilter: newsFilterSliceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(myLoggerMiddleware),
});

export default store;
