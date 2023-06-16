import { createSlice } from "@reduxjs/toolkit";

export const chatbotsSlice = createSlice({
  name: "chatbots",
  initialState: {
    chatbots: [],
  },
  reducers: {
    addChatbot: (state, action) => {
      const chatbot = action.payload;
      console.log({ state });
      state.chatbots.push(chatbot);
    },
    deleteChatbot: (state, action) => {
      state.chatbots = state.chatbots.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

// this is for dispatch
export const { addChatbot, deleteChatbot } = chatbotsSlice.actions;

// this is for configureStore
export default chatbotsSlice.reducer;
