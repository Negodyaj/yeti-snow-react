import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProfilePageState {
  name: string;
  email: string;
  phone: string;
  website: string;
}

const initialState: ProfilePageState = {
  name: '',
  email: '',
  phone: '',
  website: '',
};

interface CurrentUserPayload {
  name: string;
  email: string;
  phone: string;
  website: string;
}

const profilePageSlice = createSlice({
  name: 'profilePage',
  initialState,
  reducers: {
    loadData: (state, action: PayloadAction<CurrentUserPayload>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.website = action.payload.website;
    },
  },
});

export const { loadData } = profilePageSlice.actions;

export const profilePageReducer = profilePageSlice.reducer;
