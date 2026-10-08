import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Classic from "./pages/Classic.jsx";
import Sports from "./pages/Sports.jsx";
import Casual from "./pages/Casual.jsx";
import Trendy from "./pages/Trendy.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Classic />
      <Sports />
      <Casual />
      <Trendy />
      <Footer />
    </div>
  );
}

export default App;