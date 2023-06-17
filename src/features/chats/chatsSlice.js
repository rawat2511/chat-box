import { createSlice } from "@reduxjs/toolkit";

export const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    chats: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.chats.push(action.payload);
    },
  },
});

export const { addMessage } = chatsSlice.actions;

export default chatsSlice.reducer;
