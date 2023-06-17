import createIcon from "../assets/newChatbox.jpg";
import styles from "./sidebarHead.module.css";
import axios from "axios";
import { addChatbot } from "../features/chatbots/chatbotsSlice";
import { useDispatch } from "react-redux";

async function fetchData() {
  const link = import.meta.env.VITE_NEW_USER_LINK;
  const user = await axios.get(link);
  return user.data;
}

export const SidebarHead = () => {
  const dispatch = useDispatch();
  const addChatbox = () => {
    fetchData().then((data) => {
      const result = data.results[0];
      const {
        name: { title, first, last },
        picture,
        login,
      } = result;
      const user = {
        name: `${title} ${first} ${last}`,
        image: picture?.large,
        id: login.uuid,
      };
      dispatch(addChatbot(user));
    });
  };
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={addChatbox}>
        New Chatbox
        <img
          className={styles.image}
          src={createIcon}
          alt="Create new chatbox"
        />
      </button>
    </div>
  );
};
