import { catalogReducer } from '../pages/CatalogPage/catalogPage.slice';
import { configureStore } from '@reduxjs/toolkit';
import { profilePageReducer } from '../pages/ProfilePage/profilePage.slice';
import { userWidgetReducer } from '../shared/UserWidget/userWidget.slice';

export const store = configureStore({
  reducer: {
    userWidget: userWidgetReducer,
    catalog: catalogReducer,
    profilePage: profilePageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
