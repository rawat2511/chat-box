// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { ChatScreen } from "./components/ChatScreen";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <ChatScreen />
    </div>
  );
}

export default App;
