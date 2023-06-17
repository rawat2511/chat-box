import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbotList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatbot } from "../features/chatbots/chatbotsSlice";
import { addMessage } from "../features/chats/chatsSlice";
import { v4 as uuid } from "uuid";

const ListItem = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const deleteChatboxFunc = () => {
    dispatch(deleteChatbot({ id }));
  };
  return (
    <div className={styles.chatbox}>
      <div className={styles.userDetails}>
        <img className={styles.image} src={image} />
        <span>{name}</span>
        <button className={styles.close} onClick={() => deleteChatboxFunc()}>
          X
        </button>
      </div>
      <hr />
      <ChatSection id={id} name={name} />
    </div>
  );
};

const Chats = ({ currentUserId, chats }) => {
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the message container
    messageContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  return (
    <div className={styles.eachChat}>
      {chats.length
        ? chats.map(({ userId, chatId, name, chat }, i) => {
            const isCurrentUser = currentUserId === userId;
            const chatContainerClass = isCurrentUser
              ? styles.myChatContainer
              : styles.othersChatContainer;
            const chatContentClass = isCurrentUser
              ? styles.myChat
              : styles.othersChat;

            return (
              <div className={chatContainerClass} key={chatId}>
                <div className={chatContentClass}>
                  {!isCurrentUser && <p className={styles.name}>{name}</p>}
                  <p className={styles.chatText}>{chat}</p>
                </div>
              </div>
            );
          })
        : null}
      <span ref={messageContainerRef} />
    </div>
  );
};

export default Chats;

const ChatSection = ({ id, name }) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats.chats);
  const sendMessage = () => {
    dispatch(addMessage({ userId: id, chatId: uuid(), name, chat: input }));
    setInput("");
  };
  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatDiv}>
        <Chats currentUserId={id} chats={chats} />
      </div>
      <div className={styles.inputBox}>
        <input
          value={input}
          className={styles.input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="write something"
        />
        <button disabled={input ? false : true} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export const ChatbotList = () => {
  const chatbots = useSelector((state) => state.chatbots);
  return (
    <div className={styles.chatbotList}>
      {chatbots.chatbots.map(({ name, image, id }) => (
        <ListItem key={id} name={name} image={image} id={id} />
      ))}
    </div>
  );
};
