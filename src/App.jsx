import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Classic from "./pages/Classic.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Classic />
    </div>
  );
}

export default App;