import { configureStore } from "@reduxjs/toolkit";
import chatbotReducer from "../features/chatbots/chatbotsSlice";
import chatsReducer from "../features/chats/chatsSlice";

export default configureStore({
  reducer: {
    chatbots: chatbotReducer,
    chats: chatsReducer,
  },
});
