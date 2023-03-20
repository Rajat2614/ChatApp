import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Chatroom from "./pages/Chatroom";
import Enter from "./pages/Enter";
import {supabase} from "./supabaseClient";

function App() {

  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/chat" element={<Chatroom />} />
      </Routes>
    </div>
  )
}

export default App
