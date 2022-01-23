import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyles";
import About from "./components/about";
import Contact from "./components/contact";
import Homepage from "./components/home";
import Header from "./components/Navigation/Header";
import { useLocation } from "react-router-dom";
import Technologies from "./components/work/Technologies";

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
        <Route path="/work" element={<Technologies />} />
      </Routes>
    </div>
  );
}

export default App;
