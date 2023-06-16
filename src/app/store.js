import { configureStore } from "@reduxjs/toolkit";
import chatbotReducer from "../features/chatbots/chatbotsSlice";

export default configureStore({
  reducer: {
    chatbots: chatbotReducer,
  },
});
