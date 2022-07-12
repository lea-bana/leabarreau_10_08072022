import "./style/App.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
