import "./style/App.css";
import Header from "./components/header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Footer from "./components/footer";
import Accomodation from "./pages/accomodation";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/logements/:id" element={<Accomodation />}></Route>
        <Route exact path="/error" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
