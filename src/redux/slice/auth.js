import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    userData: null,
  };
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      saveUserData: (state, action) => {
        let Data = action.payload;
        state.userData = Data;
        saveAccessTokenToStorage(Data);
      },
      removeUserData: (state, action) => {
        state.userData = null;
        removeUserDataFromStorage();
      },
    },

  });

  export const {saveUserData, removeUserData} = authSlice.actions;
export default authSlice.reducer;