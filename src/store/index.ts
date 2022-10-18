import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/rootReducer';
import { persistStore } from 'redux-persist';
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
const persistor = persistStore(store);

export { store, persistor };
