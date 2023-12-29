import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';

import {CompanyReducer} from '../features/company/index.ts';

export const store = configureStore({
  reducer: {
    company: CompanyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
