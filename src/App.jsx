// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import { SidebarHead } from "./components/sidebarHead";
import { ChatbotList } from "./components/ChatbotList";

function App() {
  return (
    <div className="container">
      <SidebarHead />
      <ChatbotList />
    </div>
  );
}

export default App;
