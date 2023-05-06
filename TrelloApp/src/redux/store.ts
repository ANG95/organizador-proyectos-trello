import { configureStore, getDefaultMiddleware, Middleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export const middleware = getDefaultMiddleware({
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  }),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
