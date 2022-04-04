import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserInfo } from "./actions";
import type { UserState } from "./types";

const PREFIX = "userInfo";

const initialState: any = {
  userInfo: {},
};

export const orderOpenSlice = createSlice({
  name: PREFIX,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserInfo.fulfilled.type,
        (state: UserState, action: PayloadAction<any>) => {
          state.userInfo = action.payload;
        }
      ) 
  },
});

export { getUserInfo };

export default orderOpenSlice.reducer;
