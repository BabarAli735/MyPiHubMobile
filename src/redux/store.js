import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../redux/slice/auth'
const reducer = {
    AuthReducer:AuthReducer,
};

const  store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
})
});

export default store;