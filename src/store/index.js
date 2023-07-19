import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import userSlice from './user-slice';
const store = configureStore({
    reducer: {
       auth : authSlice.reducer,
       user: userSlice.reducer,
      },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  
export default store;