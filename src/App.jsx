import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > 1100
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header onLoginClick={() => setIsLoginOpen(true)} />

      <div className="main-area">
        <Welcome />
        {isLoginOpen && (
          <Login onClose={() => setIsLoginOpen(false)} />
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;