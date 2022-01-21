import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyles";
import About from "./components/about";
import Contact from "./components/contact";
import Homepage from "./components/home";
import Header from "./components/Navigation/Header";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      {location.pathname === "/" ? null : <Header />}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
