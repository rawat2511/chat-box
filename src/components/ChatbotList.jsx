import React from "react";
import styles from "./chatbotList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteChatbot } from "../features/chatbots/chatbotsSlice";

const ListItem = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const deleteChatboxFunc = () => {
    dispatch(deleteChatbot({ id }));
  };
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={image} />
      <span>{name}</span>
      <button className={styles.close} onClick={() => deleteChatboxFunc()}>
        X
      </button>
    </div>
  );
};

export const ChatbotList = () => {
  const chatbots = useSelector((state) => state.chatbots);

  console.log(chatbots);
  return (
    <div>
      {chatbots.chatbots.map(({ name, image, id }) => (
        <ListItem key={id} name={name} image={image} id={id} />
      ))}
      <hr />
    </div>
  );
};
