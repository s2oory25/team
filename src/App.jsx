import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Classic from "./pages/Classic";
import Sports from "./pages/Sports";
import Casual from "./pages/Casual";
import Trendy from "./pages/Trendy";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="app">
      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <div className="main-area">
        <Home />

        {isLoginOpen && (
          <Login onClose={() => setIsLoginOpen(false)} />
        )}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;