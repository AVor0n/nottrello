import { api } from '@api';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import type { PropsWithChildren } from 'react';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export const StoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);
