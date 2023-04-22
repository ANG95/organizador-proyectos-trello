import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;