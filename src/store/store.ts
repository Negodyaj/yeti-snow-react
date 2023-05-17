import { catalogReducer } from '../pages/CatalogPage/catalogPage.slice';
import { configureStore } from '@reduxjs/toolkit';
import { userWidgetReducer } from '../shared/UserWidget/userWidget.slice';

export const store = configureStore({
  reducer: {
    userWidget: userWidgetReducer,
    catalog: catalogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
